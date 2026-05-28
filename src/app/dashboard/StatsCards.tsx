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
    <div className="grid grid-cols-4 gap-6 mt-8">
      {stats.map((item) => {
}
