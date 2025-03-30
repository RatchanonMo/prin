import { type NextRequest, NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"
import { hash } from "bcrypt"

const prisma = new PrismaClient()

export async function POST(request: NextRequest) {
  try {
    const { name, email, password, adminSecret } = await request.json()

    // Validate required fields
    if (!name || !email || !password || !adminSecret) {
      return NextResponse.json({ message: "All fields are required" }, { status: 400 })
    }

    // Verify admin secret
    const expectedAdminSecret = process.env.ADMIN_SECRET
    if (!expectedAdminSecret || adminSecret !== expectedAdminSecret) {
      return NextResponse.json({ message: "Invalid admin secret" }, { status: 403 })
    }

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    })

    if (existingUser) {
      return NextResponse.json({ message: "User with this email already exists" }, { status: 409 })
    }

    // Check if GreenStart company exists, create if not
    let company = await prisma.company.findFirst({
      where: { name: "GreenStart" },
    })

    if (!company) {
      company = await prisma.company.create({
        data: {
          name: "GreenStart",
        },
      })
    }

    // Hash password
    const hashedPassword = await hash(password, 10)

    // Create admin user
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role: "ADMIN",
        companyId: company.id,
      },
    })

    return NextResponse.json({
      message: "Admin user created successfully",
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    })
  } catch (error) {
    console.error("Admin registration error:", error)
    return NextResponse.json({ message: "An error occurred during registration" }, { status: 500 })
  } finally {
    await prisma.$disconnect()
  }
}

