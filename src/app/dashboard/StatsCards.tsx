// StatsCards.tsx

'use client'

import {
  Coins,
  Trophy,
  Activity,
  CheckCircle2,
} from 'lucide-react'

const stats = [
  {
    title: 'Tokens',
    value: '12.5K',
    icon: Coins,
  },
  {
    title: 'XP',
    value: '14',
    icon: Trophy,
  },
  {
    title: 'Tasks',
    value: '89',
    icon: CheckCircle2,
  },
  {
    title: 'Activity',
    value: '96%',
    icon: Activity,
  },
]

export default function StatsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-8">
      {stats.map((item) => {
        const Icon = item.icon

        return (
          <div
            key={item.title}
            className="bg-white rounded-[30px] p-6 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500">
                  {item.title}
                </p>

                <h3 className="text-5xl font-black mt-4">
                  {item.value}
                </h3>
              </div>

              <div className="w-16 h-16 rounded-2xl bg-[#f5f7fb] flex items-center justify-center">
                <Icon />
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
