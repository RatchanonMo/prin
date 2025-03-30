export const esg = {
  getSubmissions: async (params?: { type?: string }) => {
    // In a real application, this would fetch data from an API.
    // This is a mock implementation for demonstration purposes.
    const mockSubmissions = [
      {
        id: "1",
        type: "ENVIRONMENTAL",
        status: "PENDING",
        submittedAt: new Date().toISOString(),
        reviewedAt: null,
        reviewerId: null,
        reviewer: null,
        rejectionReason: null,
        companyId: "acme",
        company: { name: "Acme Corp" },
      },
      {
        id: "2",
        type: "SOCIAL",
        status: "APPROVED",
        submittedAt: new Date().toISOString(),
        reviewedAt: new Date().toISOString(),
        reviewerId: "reviewer1",
        reviewer: { name: "Dr. Emma Chen" },
        rejectionReason: null,
        companyId: "acme",
        company: { name: "Acme Corp" },
      },
      {
        id: "3",
        type: "GOVERNANCE",
        status: "REJECTED",
        submittedAt: new Date().toISOString(),
        reviewedAt: new Date().toISOString(),
        reviewerId: "reviewer2",
        reviewer: { name: "Michael Rodriguez" },
        rejectionReason: "Data is inaccurate",
        companyId: "acme",
        company: { name: "Acme Corp" },
      },
    ]

    let filteredSubmissions = mockSubmissions

    if (params?.type) {
      filteredSubmissions = filteredSubmissions.filter((submission) => submission.type === params.type)
    }

    return filteredSubmissions
  },

  submitData: async (data: any) => {
    // In a real application, this would send data to an API.
    console.log("Submitting data:", data)
    return Promise.resolve()
  },

  reviewSubmission: async (data: any) => {
    // In a real application, this would send data to an API.
    console.log("Reviewing submission:", data)
    return Promise.resolve()
  },

  getScores: async () => {
    // Mock implementation for demonstration purposes.
    return {
      environmentalScore: 75,
      socialScore: 80,
      governanceScore: 90,
      overallScore: 82,
    }
  },
}

export const auth = {
  register: async (data: any) => {
    // In a real application, this would send data to an API.
    console.log("Registering user:", data)
    return Promise.resolve()
  },
}

