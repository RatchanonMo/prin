// app/api/companies/[id]/route.ts
import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    const searchParams = request.nextUrl.searchParams
    const companyId = searchParams.get('id')

    if (!session || !session.user) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    // Check if user has access to this company's data
    if (
      session.user.role !== "admin" &&
      session.user.role !== "esg_team" &&
      session.user.companyId !== companyId
    ) {
      return NextResponse.json(
        { message: "Unauthorized to access this company's data" },
        { status: 403 }
      );
    }

    // Get company
    const company = await prisma.company.findUnique({
      where: { id: companyId as string },
    });

    if (!company) {
      return NextResponse.json(
        { message: "Company not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(company);
  } catch (error) {
    console.error("Error fetching company:", error);
    return NextResponse.json(
      { message: "Failed to fetch company" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
