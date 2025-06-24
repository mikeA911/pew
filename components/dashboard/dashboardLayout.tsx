'use client'

import { useState } from 'react'
import { useAuth } from '@/components/auth/AuthProvider'
import { 
  Home, 
  Heart, 
  Pill, 
  Activity, 
  MessageSquare, 
  Settings,
  Menu,
  X,
  LogOut
} from 'lucide-react'

interface DashboardLayoutProps {
  children: React.ReactNode
}

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: Home },
  { name: 'Vitals', href: '/dashboard/vitals', icon: Heart },
  { name: 'Medications', href: '/dashboard/medications', icon: Pill },
  { name: 'Wellness', href: '/dashboard/wellness', icon: Activity },
  { name: 'AI Health Agent', href: '/dashboard/ai-chat', icon: MessageSquare },
  { name: 'Settings', href: '/dashboard/settings', icon: Settings },
]

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const { user, signOut } = useAuth()

  const handleSignOut = async