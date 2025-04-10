// app/api/esg/review/route.ts
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';
import { calculateEnvironmentalScore, calculateGovernanceScore, calculateSocialScore } from '@/lib/calculateScore';

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session || !session.user) {
      return NextResponse.json(
        { message: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Check if user is admin or ESG team
    if (session.user.role !== 'admin' && session.user.role !== 'esg_team') {
      return NextResponse.json(
        { message: 'Unauthorized. Only ESG team members can review submissions' },
        { status: 403 }
      );
    }

    const { submissionId, status, rejectionReason } = await request.json();

    // Validate status
    if (!['APPROVED', 'REJECTED'].includes(status)) {
      return NextResponse.json(
        { message: 'Invalid status' },
        { status: 400 }
      );
    }

    // If rejecting, require a reason
    if (status === 'REJECTED' && !rejectionReason) {
      return NextResponse.json(
        { message: 'Rejection reason is required' },
        { status: 400 }
      );
    }

    // Update submission
    const submission = await prisma.submission.update({
      where: { id: submissionId },
      data: {
        status,
        rejectionReason: status === 'REJECTED' ? rejectionReason : null,
        reviewerId: session.user.id,
        reviewedAt: new Date(),
      },
    });

    // If approved, update ESG scores
    if (status === 'APPROVED') {
      await updateESGScores(submission.companyId);
    }

    return NextResponse.json(submission);
  } catch (error) {
    console.error('Error reviewing submission:', error);
    return NextResponse.json(
      { message: 'Failed to review submission' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}

// Helper function to update ESG scores
async function updateESGScores(companyId: string) {
  try {
    // Get all approved submissions for this company
    const submissions = await prisma.submission.findMany({
      where: {
        companyId,
        status: 'APPROVED',
      },
    });

    // Group by type
    const environmentalSubmissions = submissions.filter(s => s.type === 'ENVIRONMENTAL');
    const socialSubmissions = submissions.filter(s => s.type === 'SOCIAL');
    const governanceSubmissions = submissions.filter(s => s.type === 'GOVERNANCE');

    // Calculate scores (simplified example)
    // In a real application, you would have a more sophisticated scoring algorithm
    const environmentalScore = environmentalSubmissions.length > 0 ? calculateEnvironmentalScore(JSON.parse(environmentalSubmissions[0]?.data)) : 0;
    const socialScore = socialSubmissions.length > 0 ? calculateSocialScore(JSON.parse(socialSubmissions[0]?.data)) : 0;
    const governanceScore = governanceSubmissions.length > 0 ? calculateGovernanceScore(JSON.parse(governanceSubmissions[0]?.data)) : 0;
    
    // Calculate overall score
    let overallScore = 0;
    let divisor = 0;
    
    if (environmentalScore > 0) {
      overallScore += environmentalScore;
      divisor++;
    }
    
    if (socialScore > 0) {
      overallScore += socialScore;
      divisor++;
    }
    
    if (governanceScore > 0) {
      overallScore += governanceScore;
      divisor++;
    }
    
    overallScore = divisor > 0 ? Math.round(overallScore / divisor) : 0;

    // Update or create ESG scores
    await prisma.eSGScore.upsert({
      where: { companyId },
      update: {
        environmentalScore,
        socialScore,
        governanceScore,
        overallScore,
      },
      create: {
        companyId,
        environmentalScore,
        socialScore,
        governanceScore,
        overallScore,
      },
    });
  } catch (error) {
    console.error('Error updating ESG scores:', error);
    throw error;
  }
}