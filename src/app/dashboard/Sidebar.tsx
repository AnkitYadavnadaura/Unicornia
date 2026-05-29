// /app/dashboard/Sidebar.tsx

'use client'

import { motion } from 'framer-motion'

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
  Sparkles,
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
    <aside className="w-[300px] min-h-screen bg-white/70 backdrop-blur-3xl border-r border-white/20 p-6 flex flex-col justify-between sticky top-0">
      
      {/* TOP */}
      <div>
        
        {/* LOGO */}
        <div className="flex items-center gap-4 mb-12">
          
          <motion.div
            whileHover={{
              rotate: 12,
              scale: 1.08,
            }}
            className="w-16 h-16 rounded-[24px] bg-gradient-to-r from-pink-500 via-violet-500 to-cyan-500 flex items-center justify-center shadow-[0_0_40px_rgba(236,72,153,0.45)]"
          >
            <Sparkles className="text-white" />
          </motion.div>

          <div>
            <h1 className="text-3xl font-black text-[#081120]">
              Unicornia
            </h1>

            <p className="text-sm text-gray-500">
              Startup Civilization
            </p>
          </div>
        </div>

        {/* PROFILE CARD */}
        <motion.div
          whileHover={{
            scale: 1.02,
          }}
          className="rounded-[32px] bg-gradient-to-r from-[#0f172a] to-[#111827] p-6 text-white relative overflow-hidden mb-10"
        >
          <div className="absolute top-0 right-0 w-[140px] h-[140px] bg-cyan-500/20 rounded-full blur-3xl"></div>

          <div className="relative z-10">
            
            <div className="flex items-center gap-4">
              
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-pink-500 to-cyan-500"></div>

              <div>
                <h2 className="text-xl font-black">
                  Ankit
                </h2>

                <p className="text-white/60">
                  Founder Rank #12
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-8">
              
              <div className="rounded-2xl bg-white/10 p-4">
                <p className="text-white/60 text-sm">
                  Tokens
                </p>

                <h3 className="text-3xl font-black mt-2">
                  12.5K
                </h3>
              </div>

              <div className="rounded-2xl bg-white/10 p-4">
                <p className="text-white/60 text-sm">
                  XP
                </p>

                <h3 className="text-3xl font-black mt-2">
                  9.4K
                </h3>
              </div>
            </div>
          </div>
        </motion.div>

        {/* MENU */}
        <div className="space-y-3">
          {menu.map((item) => {
            const Icon = item.icon

            return (
              <motion.button
                key={item.name}
                whileHover={{
                  scale: 1.03,
                  x: 5,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                onClick={() =>
                  setActivePage(item.name)
                }
                className={`relative w-full flex items-center gap-4 rounded-2xl px-5 py-4 overflow-hidden transition-all ${
                  activePage === item.name
                    ? 'text-white'
                    : 'text-[#081120]'
                }`}
              >
                
                {activePage === item.name && (
                  <motion.div
                    layoutId="activeSidebar"
                    className="absolute inset-0 bg-gradient-to-r from-pink-500 via-violet-500 to-cyan-500 rounded-2xl shadow-[0_0_40px_rgba(236,72,153,0.35)]"
                  />
                )}

                <div className="relative z-10 flex items-center gap-4">
                  <Icon size={22} />

                  <span className="font-bold text-lg">
                    {item.label}
                  </span>
                </div>
              </motion.button>
            )
          })}
        </div>
      </div>

      {/* BOTTOM */}
      <motion.div
        whileHover={{
          scale: 1.02,
        }}
        className="rounded-[32px] bg-gradient-to-r from-cyan-500 to-blue-500 p-6 text-white relative overflow-hidden"
      >
        <div className="absolute -right-10 -bottom-10 w-[140px] h-[140px] bg-white/10 rounded-full blur-2xl"></div>

        <div className="relative z-10">
          
          <h2 className="text-3xl font-black">
            AI Founder
          </h2>

          <p className="mt-3 text-white/80 leading-relaxed">
            Need funding, team, startup ideas,
            or pitch guidance?
          </p>

          <button className="mt-6 w-full rounded-2xl bg-white text-black py-4 font-black hover:scale-[1.02] transition-all">
            Open AI Assistant
          </button>
        </div>
      </motion.div>
    </aside>
  )
}
