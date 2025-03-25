"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

// Define user roles
export type UserRole = "admin" | "esg_team" | "company_user"

// Define user interface
export interface User {
  id: string
  name: string
  email: string
  company: string
  companyId: string
  role: UserRole
  initials: string
  isLoggedIn: boolean
}

// Define context interface
interface AccessControlContextType {
  user: User | null
  isLoading: boolean
  isAuthenticated: boolean
  isESGTeamMember: boolean
  isAdmin: boolean
  isCompanyUser: boolean
  login: (email: string, password: string) => Promise<void>
  logout: () => void
  canApproveReports: boolean
  canViewCompanyData: (companyId: string) => boolean
}

// Create context with default values
const AccessControlContext = createContext<AccessControlContextType>({
  user: null,
  isLoading: true,
  isAuthenticated: false,
  isESGTeamMember: false,
  isAdmin: false,
  isCompanyUser: false,
  login: async () => {},
  logout: () => {},
  canApproveReports: false,
  canViewCompanyData: () => false,
})

// Sample users for demo purposes
const DEMO_USERS: User[] = [
  {
    id: "user1",
    name: "Jane Smith",
    email: "jane@acmecorp.com",
    company: "Acme Corp",
    companyId: "acme",
    role: "company_user",
    initials: "JS",
    isLoggedIn: true,
  },
  {
    id: "user2",
    name: "Dr. Emma Chen",
    email: "emma@greenstart.com",
    company: "GreenStart",
    companyId: "greenstart",
    role: "esg_team",
    initials: "EC",
    isLoggedIn: true,
  },
  {
    id: "user3",
    name: "Michael Rodriguez",
    email: "michael@greenstart.com",
    company: "GreenStart",
    companyId: "greenstart",
    role: "admin",
    initials: "MR",
    isLoggedIn: true,
  },
]

// Provider component
export function AccessControlProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  // In a real app, this would check for a stored token or session
  useEffect(() => {
    // Simulate loading user data
    const loadUser = async () => {
      setIsLoading(true)
      try {
        // For demo purposes, we'll default to the company user
        setUser(DEMO_USERS[0])
      } catch (error) {
        console.error("Failed to load user:", error)
        setUser(null)
      } finally {
        setIsLoading(false)
      }
    }

    loadUser()
  }, [])

  // Computed properties
  const isAuthenticated = !!user
  const isESGTeamMember = user?.role === "esg_team" || user?.role === "admin"
  const isAdmin = user?.role === "admin"
  const isCompanyUser = user?.role === "company_user"

  // Only ESG team members and admins can approve reports
  const canApproveReports = isESGTeamMember || isAdmin

  // Check if user can view data for a specific company
  const canViewCompanyData = (companyId: string) => {
    if (!user) return false
    if (isAdmin || isESGTeamMember) return true
    return user.companyId === companyId
  }

  // Login function (simulated)
  const login = async (email: string, password: string) => {
    setIsLoading(true)
    try {
      // Find user by email (in a real app, this would be an API call)
      const foundUser = DEMO_USERS.find((u) => u.email === email)
      if (!foundUser) {
        throw new Error("Invalid credentials")
      }

      // In a real app, you would validate the password here

      setUser(foundUser)
    } catch (error) {
      console.error("Login failed:", error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  // Logout function
  const logout = () => {
    setUser(null)
  }

  // Switch user function for demo purposes
  const switchUser = (userId: string) => {
    const foundUser = DEMO_USERS.find((u) => u.id === userId)
    if (foundUser) {
      setUser(foundUser)
    }
  }

  // Context value
  const value = {
    user,
    isLoading,
    isAuthenticated,
    isESGTeamMember,
    isAdmin,
    isCompanyUser,
    login,
    logout,
    canApproveReports,
    canViewCompanyData,
    // For demo purposes only
    switchUser,
  }

  return <AccessControlContext.Provider value={value}>{children}</AccessControlContext.Provider>
}

// Custom hook to use the context
export function useAccessControl() {
  const context = useContext(AccessControlContext)
  if (context === undefined) {
    throw new Error("useAccessControl must be used within an AccessControlProvider")
  }
  return context
}

