// ESG Rating Scale based on industry standards (similar to MSCI ESG Ratings)
export type ESGRating = "AAA" | "AA" | "A" | "BBB" | "BB" | "B" | "CCC"

export type RatingCategory = "Leader" | "Average" | "Laggard"

export interface ESGRatingInfo {
  rating: ESGRating
  category: RatingCategory
  color: string
  description: string
}

// Convert numerical score to ESG rating
export function getESGRating(score: number): ESGRatingInfo {
  if (score >= 85) {
    return {
      rating: "AAA",
      category: "Leader",
      color: "text-green-600",
      description: "Leading performance with exceptional ESG management and minimal risks",
    }
  } else if (score >= 75) {
    return {
      rating: "AA",
      category: "Leader",
      color: "text-green-500",
      description: "Strong performance with robust ESG management and low risks",
    }
  } else if (score >= 65) {
    return {
      rating: "A",
      category: "Average",
      color: "text-green-400",
      description: "Above average performance with adequate ESG management",
    }
  } else if (score >= 55) {
    return {
      rating: "BBB",
      category: "Average",
      color: "text-yellow-500",
      description: "Average performance with moderate ESG management and risks",
    }
  } else if (score >= 45) {
    return {
      rating: "BB",
      category: "Average",
      color: "text-yellow-600",
      description: "Below average performance with some ESG management challenges",
    }
  } else if (score >= 35) {
    return {
      rating: "B",
      category: "Laggard",
      color: "text-red-400",
      description: "Poor performance with significant ESG management gaps and high risks",
    }
  } else {
    return {
      rating: "CCC",
      category: "Laggard",
      color: "text-red-600",
      description: "Very poor performance with severe ESG management deficiencies and very high risks",
    }
  }
}

// Get rating for individual E, S, or G score
export function getCategoryRating(score: number): ESGRatingInfo {
  return getESGRating(score)
}

// Get industry benchmark data (mock data - would be replaced with real data in production)
export function getIndustryBenchmarks(industry: "General" | "Technology" | "Manufacturing" = "General"): {
  average: number
  leaders: number
  laggards: number
  distribution: Record<ESGRating, number>
} {
  // Mock data - in a real application, this would come from a database or API
  const benchmarks = {
    General: {
      average: 58,
      leaders: 72,
      laggards: 42,
      distribution: {
        AAA: 5,
        AA: 10,
        A: 15,
        BBB: 30,
        BB: 20,
        B: 15,
        CCC: 5,
      },
    },
    Technology: {
      average: 62,
      leaders: 78,
      laggards: 45,
      distribution: {
        AAA: 8,
        AA: 12,
        A: 20,
        BBB: 25,
        BB: 18,
        B: 12,
        CCC: 5,
      },
    },
    Manufacturing: {
      average: 54,
      leaders: 68,
      laggards: 38,
      distribution: {
        AAA: 3,
        AA: 8,
        A: 12,
        BBB: 25,
        BB: 25,
        B: 18,
        CCC: 9,
      },
    },
  }

  return benchmarks[industry];
}