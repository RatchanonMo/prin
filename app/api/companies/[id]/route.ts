// app/api/companies/[id]/route.ts
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';

const prisma = new PrismaClient();

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session || !session.user) {
      return NextResponse.json(
        { message: 'Unauthorized' },
        { status: 401 }
      );
    }

    const companyId = params.id;

    // Check if user has access to this company's data
    if (session.user.role !== 'ADMIN' && session.user.role !== 'ESG_TEAM' && session.user.companyId !== companyId) {
      return NextResponse.json(
        { message: 'Unauthorized to access this company\'s data' },
        { status: 403 }
      );
    }

    // Get company
    const company = await prisma.company.findUnique({
      where: { id: companyId },
    });

    if (!company) {
      return NextResponse.json(
        { message: 'Company not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(company);
  } catch (error) {
    console.error('Error fetching company:', error);
    return NextResponse.json(
      { message: 'Failed to fetch company' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}