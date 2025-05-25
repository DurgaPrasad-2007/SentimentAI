"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

interface User {
  id: string
  name: string
  email: string
  role: string
  image?: string | null
}

interface AuthContextType {
  user: User | null
  login: (email: string, password: string) => Promise<boolean>
  logout: () => void
  isLoading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

// Demo users
const demoUsers = [
  {
    id: "1",
    name: "Demo Admin",
    email: "admin@sentimentai.com",
    password: "password123",
    role: "admin",
    image: null,
  },
  {
    id: "2",
    name: "Demo Analyst",
    email: "analyst@sentimentai.com",
    password: "password123",
    role: "analyst",
    image: null,
  },
  {
    id: "3",
    name: "Demo Viewer",
    email: "viewer@sentimentai.com",
    password: "password123",
    role: "viewer",
    image: null,
  },
]

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check for stored session on mount
    const storedUser = localStorage.getItem("sentimentai-user")
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser))
      } catch (error) {
        localStorage.removeItem("sentimentai-user")
      }
    }
    setIsLoading(false)
  }, [])

  const login = async (email: string, password: string): Promise<boolean> => {
    const foundUser = demoUsers.find((u) => u.email === email && u.password === password)

    if (foundUser) {
      const userSession = {
        id: foundUser.id,
        name: foundUser.name,
        email: foundUser.email,
        role: foundUser.role,
        image: foundUser.image,
      }
      setUser(userSession)
      localStorage.setItem("sentimentai-user", JSON.stringify(userSession))
      return true
    }

    return false
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("sentimentai-user")
  }

  return <AuthContext.Provider value={{ user, login, logout, isLoading }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
