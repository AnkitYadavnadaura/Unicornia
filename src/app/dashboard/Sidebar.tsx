'use client'

import {
  LayoutDashboard,
  Rocket,
  Users,
  Wallet,
  Bell,
  Settings,
  Trophy,
  Briefcase,
} from 'lucide-react'

const links = [
  {
    name: 'Dashboard',
    icon: LayoutDashboard,
  },
  {
    name: 'Startups',
    icon: Rocket,
  },
  {
    name: 'Team',
    icon: Users,
  },
  {
    name: 'Wallet',
    icon: Wallet,
  },
  {
    name: 'Funding',
    icon: Briefcase,
  },
  {
    name: 'Notifications',
    icon: Bell,
  },
  {
    name: 'Settings',
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
          {links.map((link) => {
            const Icon = link.icon

            return (
              <button
                key={link.name}
                className="w-full flex items-center gap-4 rounded-2xl px-5 py-4 bg-white/5 hover:bg-gradient-to-r hover:from-pink-500 hover:to-violet-500 transition-all"
              >
                <Icon size={22} />

                <span className="font-semibold">
                  {link.name}
                </span>
              </button>
            )
          })}
        </div>
      </div>

      <div className="rounded-[30px] bg-gradient-to-r from-pink-500 to-violet-500 p-6">
        <div className="flex items-center gap-3">
          <Trophy />

          <h3 className="text-2xl font-black">
            Founder Rank
          </h3>
        </div>

        <h2 className="text-6xl font-black mt-6">
          #07
        </h2>

        <p className="mt-4 text-white/80">
          Top startup builder this week
        </p>

        <button className="mt-6 w-full rounded-2xl bg-white text-black py-4 font-bold">
          View Leaderboard
        </button>
      </div>
    </aside>
  )
}
