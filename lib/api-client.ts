// export const esg = {
//     getSubmissions: async (params?: { type?: string }) => {
//       // In a real application, this would fetch data from an API.
//       // This is a mock implementation for demonstration purposes.
//       const mockSubmissions = [
//         {
//           id: "1",
//           type: "ENVIRONMENTAL",
//           status: "PENDING",
//           submittedAt: new Date().toISOString(),
//           reviewedAt: null,
//           reviewerId: null,
//           reviewer: null,
//           rejectionReason: null,
//           companyId: "acme",
//           company: { name: "Acme Corp" },
//         },
//         {
//           id: "2",
//           type: "SOCIAL",
//           status: "APPROVED",
//           submittedAt: new Date().toISOString(),
//           reviewedAt: new Date().toISOString(),
//           reviewerId: "reviewer1",
//           reviewer: { name: "Dr. Emma Chen" },
//           rejectionReason: null,
//           companyId: "acme",
//           company: { name: "Acme Corp" },
//         },
//         {
//           id: "3",
//           type: "GOVERNANCE",
//           status: "REJECTED",
//           submittedAt: new Date().toISOString(),
//           reviewedAt: new Date().toISOString(),
//           reviewerId: "reviewer2",
//           reviewer: { name: "Michael Rodriguez" },
//           rejectionReason: "Data is inaccurate",
//           companyId: "acme",
//           company: { name: "Acme Corp" },
//         },
//       ]
  
//       let filteredSubmissions = mockSubmissions
  
//       if (params?.type) {
//         filteredSubmissions = filteredSubmissions.filter((submission) => submission.type === params.type)
//       }
  
//       return filteredSubmissions
//     },
  
//     submitData: async (data: any) => {
//       // In a real application, this would send data to an API.
//       console.log("Submitting data:", data)
//       return Promise.resolve()
//     },
  
//     reviewSubmission: async (data: any) => {
//       // In a real application, this would send data to an API.
//       console.log("Reviewing submission:", data)
//       return Promise.resolve()
//     },
  
//     getScores: async () => {
//       // Mock implementation for demonstration purposes.
//       return {
//         environmentalScore: 75,
//         socialScore: 80,
//         governanceScore: 90,
//         overallScore: 82,
//       }
//     },
//   }
  
//   export const auth = {
//     register: async (data: any) => {
//       // In a real application, this would send data to an API.
//       console.log("Registering user:", data)
//       return Promise.resolve()
//     },
//   }
  
// API client utility for making requests to the backend

// Base function for making API requests
async function fetchAPI(endpoint: string, options: RequestInit = {}) {
  const url = `/api${endpoint}`;

  const defaultOptions: RequestInit = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const response = await fetch(url, {
    ...defaultOptions,
    ...options,
  });

  // For non-JSON responses
  if (!response.headers.get('content-type')?.includes('application/json')) {
    if (!response.ok) {
      throw new Error('An error occurred');
    }
    return null;
  }

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'An error occurred');
  }

  return data;
}

// Authentication
export const auth = {
  signIn: async (email: string, password: string) => {
    return fetchAPI('/auth/callback/credentials', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
  },

  register: async (userData: {
    name: string;
    email: string;
    password: string;
    companyName: string;
  }) => {
    return fetchAPI('/auth/register', {
      method: 'POST',
      body: JSON.stringify(userData),
    });
  },
};

// ESG Data
export const esg = {
  submitData: async (data: {
    type: 'ENVIRONMENTAL' | 'SOCIAL' | 'GOVERNANCE';
    data: any;
  }) => {
    return fetchAPI('/esg/submit', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

  getSubmissions: async (params: {
    type?: string;
    companyId?: string;
  } = {}) => {
    const queryParams = new URLSearchParams();
    
    if (params.type) {
      queryParams.append('type', params.type);
    }
    
    if (params.companyId) {
      queryParams.append('companyId', params.companyId);
    }
    
    const query = queryParams.toString() ? `?${queryParams.toString()}` : '';
    
    return fetchAPI(`/esg/submissions${query}`);
  },

  reviewSubmission: async (data: {
    submissionId: string;
    status: 'APPROVED' | 'REJECTED';
    rejectionReason?: string;
  }) => {
    return fetchAPI('/esg/review', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

  getScores: async (companyId?: string) => {
    const query = companyId ? `?companyId=${companyId}` : '';
    
    return fetchAPI(`/esg/scores${query}`);
  },
};

// Companies
export const companies = {
  getAll: async () => {
    return fetchAPI('/companies');
  },

  getById: async (id: string) => {
    return fetchAPI(`/companies/${id}`);
  },
};

export default {
  auth,
  esg,
  companies,
};