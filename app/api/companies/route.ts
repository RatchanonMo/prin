// app/api/companies/route.ts
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session || !session.user) {
      return NextResponse.json(
        { message: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Only admin and ESG team can see all companies
    if (session.user.role !== 'admin' && session.user.role !== 'esg_team') {
      // Regular users can only see their own company
      const company = await prisma.company.findUnique({
        where: { id: session.user.companyId },
      });
      
      return NextResponse.json([company]);
    }

    // Get all companies
    const companies = await prisma.company.findMany({
      orderBy: { name: 'asc' },
    });

    return NextResponse.json(companies);
  } catch (error) {
    console.error('Error fetching companies:', error);
    return NextResponse.json(
      { message: 'Failed to fetch companies' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}