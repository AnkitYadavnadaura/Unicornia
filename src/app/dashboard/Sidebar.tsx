// /app/dashboard/Sidebar.tsx

'use client'

import {
  LayoutDashboard,
  Rocket,
  Wallet,
  Bell,
  Settings,
  User,
  BarChart3,
  MessageSquare,
  ShoppingBag,
  Briefcase,
} from 'lucide-react'

type SidebarProps = {
  activePage: string
  setActivePage: (
    page: string
  ) => void
}

const menu = [
  {
    name: 'dashboard',
    label: 'Dashboard',
    icon: LayoutDashboard,
  },
  {
    name: 'tasks',
    label: 'Tasks',
    icon: Briefcase,
  },
  {
    name: 'wallet',
    label: 'Wallet',
    icon: Wallet,
  },
  {
    name: 'analytics',
    label: 'Analytics',
    icon: BarChart3,
  },
  {
    name: 'chat',
    label: 'Chat',
    icon: MessageSquare,
  },
  {
    name: 'notifications',
    label: 'Notifications',
    icon: Bell,
  },
  {
    name: 'startups',
    label: 'Startups',
    icon: Rocket,
  },
  {
    name: 'marketplace',
    label: 'Marketplace',
    icon: ShoppingBag,
  },
  {
    name: 'profile',
    label: 'Profile',
    icon: User,
  },
  {
    name: 'settings',
    label: 'Settings',
    icon: Settings,
  },
]

export default function Sidebar({
  activePage,
  setActivePage,
}: SidebarProps) {
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
                key={item.name}
                onClick={() =>
                  setActivePage(item.name)
                }
                className={`w-full flex items-center gap-4 rounded-2xl px-5 py-4 transition-all ${
                  activePage === item.name
                    ? 'bg-gradient-to-r from-pink-500 to-violet-500'
                    : 'bg-white/5 hover:bg-white/10'
                }`}
              >
                <Icon size={20} />

                <span className="font-semibold">
                  {item.label}
                </span>
              </button>
            )
          })}
        </div>
      </div>

      <div className="rounded-[30px] bg-gradient-to-r from-pink-500 to-cyan-500 p-6">
        <h2 className="text-3xl font-black">
          Unicornia
        </h2>

        <p className="text-white/80 mt-4">
          Build startups. Earn tokens.
          Join the future ecosystem.
        </p>

        <button className="mt-6 w-full rounded-2xl bg-white text-black py-4 font-bold">
          Upgrade
        </button>
      </div>
    </aside>
  )
}
