import { type NextRequest, NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"
import { compare } from "bcrypt"
import { sign } from "jsonwebtoken"

const prisma = new PrismaClient()

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json()

    if (!email || !password) {
      return NextResponse.json({ message: "Email and password are required" }, { status: 400 })
    }

    // Find user by email
    const user = await prisma.user.findUnique({
      where: { email },
      include: {
        company: true,
      },
    })

    if (!user) {
      return NextResponse.json({ message: "Invalid email or password" }, { status: 401 })
    }

    // Verify password
    const passwordValid = await compare(password, user.password)

    if (!passwordValid) {
      return NextResponse.json({ message: "Invalid email or password" }, { status: 401 })
    }

    // Create session token
    const token = sign(
      {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
        companyId: user.companyId,
      },
      process.env.NEXTAUTH_SECRET || "fallback-secret",
      { expiresIn: "7d" },
    )

    // Return user data and token
    return NextResponse.json({
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        companyId: user.companyId,
        company: user.company?.name || null,
      },
      token,
    })
  } catch (error) {
    console.error("Authentication error:", error)
    return NextResponse.json({ message: "An error occurred during authentication" }, { status: 500 })
  } finally {
    await prisma.$disconnect()
  }
}

