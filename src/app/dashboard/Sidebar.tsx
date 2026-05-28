'use client'

import {
  LayoutDashboard,
  Briefcase,
  Wallet,
  Settings,
  Bell,
  User,
  MessageSquare,
  BarChart3,
} from 'lucide-react'

const menu = [
  {
    label: 'Dashboard',
    icon: LayoutDashboard,
  },
  {
    label: 'Tasks',
    icon: Briefcase,
  },
  {
    label: 'Wallet',
    icon: Wallet,
  },
  {
    label: 'Analytics',
    icon: BarChart3,
  },
  {
    label: 'Chat',
    icon: MessageSquare,
  },
  {
    label: 'Notifications',
    icon: Bell,
  },
  {
    label: 'Profile',
    icon: User,
  },
  {
    label: 'Settings',
    icon: Settings,
  },
]

export default function Sidebar() {
  return (
    <aside className="w-[280px] min-h-screen bg-[#081120] text-white p-6 flex flex-col justify-between">
      <div>
        <h1 className="text-4xl font-black mb-10">
          UNICORNIA
        </h1>

        <div className="space-y-4">
          {menu.map((item) => {
            const Icon = item.icon

            return (
              <button
                key={item.label}
                className="w-full flex items-center gap-4 px-5 py-4 rounded-2xl bg-white/5 hover:bg-white/10 transition"
}
