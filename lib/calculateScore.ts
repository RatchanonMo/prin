// ESG scoring weights
export const ESG_WEIGHTS = {
  environmental: {
    weight: 0.35,
    metrics: {
      carbonEmissions: 0.25,
      energyUsage: 0.2,
      renewableEnergy: 0.2,
      wasteRecycled: 0.15,
      waterUsage: 0.15,
      paperUsage: 0.05,
    },
  },
  social: {
    weight: 0.3,
    metrics: {
      genderDiversity: 0.2,
      employeeTurnover: 0.15,
      trainingHours: 0.15,
      payEquityRatio: 0.2,
      communityInvestment: 0.15,
      employeeSatisfaction: 0.15,
    },
  },
  governance: {
    weight: 0.35,
    metrics: {
      boardDiversity: 0.2,
      ethicsViolations: 0.2,
      policyCoverage: 0.15,
      dataBreaches: 0.2,
      complianceScore: 0.15,
      riskAssessmentFrequency: 0.1,
    },
  },
};

// Calculate individual category scores
interface EnvironmentalData {
  carbonEmissions: number;
  energyUsage: number;
  renewableEnergy: number;
  wasteRecycled: number;
  waterUsage: number;
  paperUsage: number;
}

interface SocialData {
  genderDiversity: number;
  employeeTurnover: number;
  trainingHours: number;
  payEquityRatio: number;
  communityInvestment: number;
  employeeSatisfaction: number;
}
interface GovernanceData {
  boardDiversity: number;
  ethicsViolations: number;
  policyCoverage: number;
  dataBreaches: number;
  complianceScore: number;
  riskAssessmentFrequency: number;
}
export function calculateEnvironmentalScore(data: EnvironmentalData): number {
  const {
    carbonEmissions,
    energyUsage,
    renewableEnergy,
    wasteRecycled,
    waterUsage,
    paperUsage,
  } = data;

  const weights = ESG_WEIGHTS.environmental.metrics;

  // Convert values to scores between 0-100
  // For metrics where lower is better (emissions, energy usage, water usage, paper usage)
  const carbonScore = Math.max(
    0,
    Math.min(100, carbonEmissions === 0 ? 100 : 100 - carbonEmissions * 10)
  );
  const energyScore = Math.max(
    0,
    Math.min(100, energyUsage === 0 ? 100 : 100 - energyUsage / 1000)
  );
  const paperScore = Math.max(
    0,
    Math.min(100, paperUsage === 0 ? 100 : 100 - paperUsage / 10)
  );

  // For metrics where higher is better (renewable energy, waste recycled)
  const renewableScore = Math.max(0, Math.min(100, renewableEnergy));
  const wasteScore = Math.max(0, Math.min(100, wasteRecycled));
  const waterScore = Math.max(
    0,
    Math.min(100, waterUsage === 0 ? 100 : 100 - waterUsage / 10000)
  );

  // Calculate weighted score
  return Math.round(
    carbonScore * weights.carbonEmissions +
      energyScore * weights.energyUsage +
      renewableScore * weights.renewableEnergy +
      wasteScore * weights.wasteRecycled +
      waterScore * weights.waterUsage +
      paperScore * weights.paperUsage
  );
}

export function calculateSocialScore(data: SocialData): number {
  const {
    genderDiversity,
    employeeTurnover,
    trainingHours,
    payEquityRatio,
    communityInvestment,
    employeeSatisfaction,
  } = data;

  const weights = ESG_WEIGHTS.social.metrics;

  // Convert values to scores between 0-100
  // For metrics where higher is better
  const diversityScore = Math.max(0, Math.min(100, genderDiversity));
  const trainingScore = Math.max(0, Math.min(100, trainingHours * 5)); // 20 hours = 100 points
  const payEquityScore = Math.max(
    0,
    Math.min(
      100,
      payEquityRatio === 0
        ? 0
        : payEquityRatio >= 1
        ? 100
        : payEquityRatio * 100
    )
  );
  const communityScore = Math.max(0, Math.min(100, communityInvestment * 20)); // 5% = 100 points
  const satisfactionScore = Math.max(0, Math.min(100, employeeSatisfaction));

  // For metrics where lower is better
  const turnoverScore = Math.max(
    0,
    Math.min(100, employeeTurnover === 0 ? 100 : 100 - employeeTurnover * 5)
  ); // 20% turnover = 0 points

  // Calculate weighted score
  return Math.round(
    diversityScore * weights.genderDiversity +
      turnoverScore * weights.employeeTurnover +
      trainingScore * weights.trainingHours +
      payEquityScore * weights.payEquityRatio +
      communityScore * weights.communityInvestment +
      satisfactionScore * weights.employeeSatisfaction
  );
}

export function calculateGovernanceScore(data: GovernanceData): number {
  const {
    boardDiversity,
    ethicsViolations,
    policyCoverage,
    dataBreaches,
    complianceScore,
    riskAssessmentFrequency,
  } = data;

  const weights = ESG_WEIGHTS.governance.metrics;

  // Convert values to scores between 0-100
  // For metrics where higher is better
  const diversityScore = Math.max(0, Math.min(100, boardDiversity));
  const policyScore = Math.max(0, Math.min(100, policyCoverage));
  const complianceScoreNormalized = Math.max(0, Math.min(100, complianceScore));

  // For metrics where lower is better
  const ethicsScore = Math.max(
    0,
    Math.min(100, ethicsViolations === 0 ? 100 : 100 - ethicsViolations * 20)
  ); // 5 violations = 0 points
  const breachesScore = Math.max(
    0,
    Math.min(100, dataBreaches === 0 ? 100 : 100 - dataBreaches * 25)
  ); // 4 breaches = 0 points

  // For risk assessment frequency (higher frequency is better)
  // Assuming frequency is number of assessments per year
  const riskScore = Math.max(0, Math.min(100, riskAssessmentFrequency * 25)); // 4 per year = 100 points

  // Calculate weighted score
  return Math.round(
    diversityScore * weights.boardDiversity +
      ethicsScore * weights.ethicsViolations +
      policyScore * weights.policyCoverage +
      breachesScore * weights.dataBreaches +
      complianceScoreNormalized * weights.complianceScore +
      riskScore * weights.riskAssessmentFrequency
  );
}

// Calculate overall ESG score
export function calculateOverallScore(
  environmental: number,
  social: number,
  governance: number
): number {
  return Math.round(
    environmental * ESG_WEIGHTS.environmental.weight +
      social * ESG_WEIGHTS.social.weight +
      governance * ESG_WEIGHTS.governance.weight
  );
}

// Parse and validate ESG data from form submission
// export function parseESGData(
//   formData: any,
//   type: "ENVIRONMENTAL" | "SOCIAL" | "GOVERNANCE"
// ): any {
//   // Validate and parse based on report type
//   switch (type) {
//     case "ENVIRONMENTAL":
//       return {
//         carbonEmissions: Number.parseFloat(formData.carbonEmissions) || 0,
//         energyUsage: Number.parseFloat(formData.energyUsage) || 0,
//         renewableEnergy: Number.parseFloat(formData.renewableEnergy) || 0,
//         wasteRecycled: Number.parseFloat(formData.wasteRecycled) || 0,
//         waterUsage: Number.parseFloat(formData.waterUsage) || 0,
//         paperUsage: Number.parseFloat(formData.paperUsage) || 0,
//       };
//     case "SOCIAL":
//       return {
//         genderDiversity: Number.parseFloat(formData.genderDiversity) || 0,
//         employeeTurnover: Number.parseFloat(formData.employeeTurnover) || 0,
//         trainingHours: Number.parseFloat(formData.trainingHours) || 0,
//         payEquityRatio: Number.parseFloat(formData.payEquityRatio) || 0,
//         communityInvestment:
//           Number.parseFloat(formData.communityInvestment) || 0,
//         employeeSatisfaction:
//           Number.parseFloat(formData.employeeSatisfaction) || 0,
//       };
//     case "GOVERNANCE":
//       return {
//         boardDiversity: Number.parseFloat(formData.boardDiversity) || 0,
//         ethicsViolations: Number.parseFloat(formData.ethicsViolations) || 0,
//         policyCoverage: Number.parseFloat(formData.policyCoverage) || 0,
//         dataBreaches: Number.parseFloat(formData.dataBreaches) || 0,
//         complianceScore: Number.parseFloat(formData.complianceScore) || 0,
//         riskAssessmentFrequency:
//           Number.parseFloat(formData.riskAssessmentFrequency) || 0,
//       };
//     default:
//       throw new Error(`Invalid report type: ${type}`);
//   }
// }
