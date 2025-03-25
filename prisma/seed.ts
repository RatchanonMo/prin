import { PrismaClient } from '@prisma/client'
import * as bcrypt from 'bcrypt'

const prisma = new PrismaClient()

async function main() {
  // Create companies
  const greenstart = await prisma.company.create({
    data: {
      name: 'GreenStart',
    },
  })

  const acmeCorp = await prisma.company.create({
    data: {
      name: 'Acme Corp',
    },
  })

  // Create users
  const adminUser = await prisma.user.create({
    data: {
      name: 'Admin User',
      email: 'admin@greenstart.com',
      password: await bcrypt.hash('admin123', 10),
      role: 'admin',
      companyId: greenstart.id,
    },
  })

  const esgTeamUser = await prisma.user.create({
    data: {
      name: 'Dr. Emma Chen',
      email: 'emma@greenstart.com',
      password: await bcrypt.hash('emma123', 10),
      role: 'esg_team',
      companyId: greenstart.id,
    },
  })

  const companyUser = await prisma.user.create({
    data: {
      name: 'Jane Smith',
      email: 'user@demo.com',
      password: await bcrypt.hash('user123', 10),
      role: 'company_user',
      companyId: acmeCorp.id,
    },
  })

  // Create sample submissions
  const environmentalSubmission = await prisma.submission.create({
    data: {
      type: 'ENVIRONMENTAL',
      data: JSON.stringify({
        carbonEmissions: 12.5,
        energyUsage: 4250,
        renewableEnergy: 25,
        wasteRecycled: 68,
        waterUsage: 1250,
        paperUsage: 120,
      }),
      status: 'APPROVED',
      submittedById: companyUser.id,
      reviewerId: esgTeamUser.id,
      reviewedAt: new Date(),
      companyId: acmeCorp.id,
    },
  })

  const socialSubmission = await prisma.submission.create({
    data: {
      type: 'SOCIAL',
      data: JSON.stringify({
        genderDiversity: 42,
        employeeTurnover: 18,
        trainingHours: 24,
        payEquityRatio: 0.94,
        communityInvestment: 2.5,
        employeeSatisfaction: 4.2,
      }),
      status: 'PENDING',
      submittedById: companyUser.id,
      companyId: acmeCorp.id,
    },
  })

  // Create ESG scores
  const esgScore = await prisma.eSGScore.create({
    data: {
      companyId: acmeCorp.id,
      environmentalScore: 75,
      socialScore: 80,
      governanceScore: 90,
      overallScore: 82,
    },
  })

  console.log('Database has been seeded!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })