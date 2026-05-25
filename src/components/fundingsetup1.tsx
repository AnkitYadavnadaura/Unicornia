'use client'

import { motion } from 'framer-motion'
import {
  Activity,
  ArrowUpRight,
  Bot,
  Brain,
  Building2,
  Crown,
  Flame,
  Gem,
  Globe,
  Link2,
  Rocket,
  Shield,
  Sparkles,
  Trophy,
  Users,
  Wallet,
  Zap,
} from 'lucide-react'

const fundingCards = [
  {
    title: 'Refer & Earn',
    icon: Link2,
    gradient: 'from-violet-500 to-cyan-400',
    value: '48.2K',
    desc: 'Referral Tokens',
  },
  {
    title: 'Pitch Arena',
    icon: Rocket,
    gradient: 'from-indigo-500 to-violet-500',
    value: '$2.4M',
    desc: 'Funding Pool',
  },
  {
    title: 'Serve Unicornia',
    icon: Globe,
    gradient: 'from-emerald-500 to-cyan-400',
    value: '12.8K XP',
    desc: 'Contribution Score',
  },
  {
    title: 'Startup Staking',
    icon: Gem,
    gradient: 'from-pink-500 to-violet-500',
    value: '18%',
    desc: 'APY Rewards',
  },
]

const activities = [
  'NeuroSync raised $240K',
  'DAO treasury distributed rewards',
  'AI startup battle started',
  'Orbit Ventures joined Unicornia',
  'Pitch Arena S8 is live',
]

const investors = [
  {
    name: 'Nova Capital',
    focus: 'AI / SaaS',
    match: '96%',
  },
  {
    name: 'Orbit Ventures',
    focus: 'Web3 / Infra',
    match: '91%',
  },
]

function GlassCard({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <motion.div
      whileHover={{
        y: -4,
        scale: 1.01,
      }}
      transition={{ duration: 0.2 }}
      className={`rounded-[32px] border border-white/50 bg-white/70 backdrop-blur-2xl shadow-[0_10px_40px_rgba(0,0,0,0.05)] ${className}`}
    >
      {children}
    </motion.div>
  )
}

export default function FundingDashboard() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#f8faff] via-[#f7f5ff] to-[#f6ffff] p-6">
      {/* Floating Orbs */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-violet-300/30 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-300/20 blur-3xl" />

      <div className="grid grid-cols-12 gap-6">
        {/* LEFT CONTENT */}
        <div className="col-span-12 xl:col-span-8 space-y-6">
          {/* HERO */}
          <GlassCard className="relative overflow-hidden p-8">
            <div className="absolute right-0 top-0 h-52 w-52 rounded-full bg-gradient-to-r from-violet-400/20 to-cyan-300/20 blur-3xl" />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-sm font-semibold text-violet-700">
                <Sparkles className="h-4 w-4" />
                Futuristic Startup Economy
              </div>

              <h1 className="mt-6 text-5xl font-black leading-tight tracking-tight text-slate-900">
                Earn Funding &
                <span className="bg-gradient-to-r from-violet-600 via-indigo-500 to-cyan-500 bg-clip-text text-transparent">
                  {' '}
                  Tokens
                </span>{' '}
                in Unicornia
              </h1>

              <p className="mt-4 max-w-2xl text-lg text-slate-600">
                Build, contribute, pitch and scale startups inside the Unicornia startup operating system.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <button className="rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-500 px-6 py-4 font-semibold text-white shadow-lg transition hover:scale-105">
                  Explore Funding
                </button>

                <button className="rounded-2xl border border-slate-200 bg-white px-6 py-4 font-semibold transition hover:scale-105">
                  View Ecosystem
                </button>
              </div>

              {/* STATS */}
              <div className="mt-8 grid gap-4 md:grid-cols-4">
                {[
                  {
                    icon: Wallet,
                    value: '$18.4M',
                    label: 'Funding',
                  },
                  {
                    icon: Users,
                    value: '48K+',
                    label: 'Founders',
                  },
                  {
                    icon: Zap,
                    value: '92%',
                    label: 'Velocity',
                  },
                  {
                    icon: Crown,
                    value: '12K',
                    label: 'Investors',
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-3xl bg-white/80 p-5 shadow-sm"
                  >
                    <div className="flex items-center justify-between">
                      <item.icon className="h-10 w-10 rounded-2xl bg-gradient-to-r from-violet-500 to-cyan-400 p-2 text-white" />
                      <ArrowUpRight className="h-5 w-5 text-emerald-500" />
                    </div>

                    <h3 className="mt-5 text-3xl font-black">
                      {item.value}
                    </h3>

                    <p className="text-sm text-slate-500">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </GlassCard>

          {/* FUNDING GRID */}
          <div className="grid gap-6 md:grid-cols-2">
            {fundingCards.map((card) => (
              <GlassCard
                key={card.title}
                className="group p-6"
              >
                <div className="flex items-start justify-between">
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-r ${card.gradient} text-white shadow-lg`}
                  >
                    <card.icon className="h-7 w-7" />
                  </div>

                  <button className="rounded-2xl bg-white px-4 py-2 text-sm font-semibold shadow-sm transition hover:scale-105">
                    Open
                  </button>
                </div>

                <h3 className="mt-6 text-3xl font-black">
                  {card.title}
                </h3>

                <div className="mt-4 flex items-end justify-between">
                  <div>
                    <h4 className="text-4xl font-black">
                      {card.value}
                    </h4>

                    <p className="mt-1 text-slate-500">
                      {card.desc}
                    </p>
                  </div>

                  <div className="flex h-20 items-end gap-1">
                    {[20, 40, 60, 35, 70, 100].map((h, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ delay: i * 0.08 }}
                        className={`w-3 rounded-full bg-gradient-to-t ${card.gradient}`}
                      />
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  {[
                    'Analytics',
                    'Rewards',
                    'AI',
                    'Leaderboard',
                  ].map((tag) => (
                    <div
                      key={tag}
                      className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-600"
                    >
                      {tag}
                    </div>
                  ))}
                </div>
              </GlassCard>
            ))}
          </div>

          {/* TOKEN ECONOMY + DAO */}
          <div className="grid gap-6 lg:grid-cols-2">
            <GlassCard className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-violet-600">
                    Token Economy
                  </p>

                  <h3 className="mt-2 text-3xl font-black">
                    UNX Treasury
                  </h3>
                </div>

                <Gem className="h-8 w-8 text-violet-600" />
              </div>

              <div className="mt-8 h-56 rounded-[28px] bg-gradient-to-br from-violet-50 to-cyan-50 p-6">
                <div className="flex h-full items-end gap-3">
                  {[30, 50, 40, 70, 65, 90, 100].map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ delay: i * 0.08 }}
                      className="w-full rounded-t-3xl bg-gradient-to-t from-violet-500 to-cyan-400"
                    />
                  ))}
                </div>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-4">
                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-xs text-slate-500">
                    Total Supply
                  </p>

                  <h4 className="mt-2 text-xl font-black">
                    1B
                  </h4>
                </div>

                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-xs text-slate-500">
                    Treasury
                  </p>

                  <h4 className="mt-2 text-xl font-black">
                    $42M
                  </h4>
                </div>

                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-xs text-slate-500">
                    DAO Votes
                  </p>

                  <h4 className="mt-2 text-xl font-black">
                    18K
                  </h4>
                </div>
              </div>
            </GlassCard>

            <GlassCard className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-cyan-600">
                    Startup Battle Arena
                  </p>

                  <h3 className="mt-2 text-3xl font-black">
                    Trending Battles
                  </h3>
                </div>

                <Flame className="h-8 w-8 text-orange-500" />
              </div>

              <div className="mt-8 space-y-4">
                {[
                  'AI vs Automation',
                  'Fintech vs Web3',
                  'SaaS vs Creator Economy',
                  'Gaming vs AI Agents',
                ].map((battle) => (
                  <div
                    key={battle}
                    className="rounded-3xl bg-white/80 p-5"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-bold">
                          {battle}
                        </h4>

                        <p className="mt-1 text-sm text-slate-500">
                          Community Startup Battle
                        </p>
                      </div>

                      <button className="rounded-2xl bg-gradient-to-r from-violet-500 to-cyan-400 px-4 py-2 text-sm font-semibold text-white">
                        Vote
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="col-span-12 xl:col-span-4 space-y-6">
          {/* AI Assistant */}
          <GlassCard className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-violet-600">
                  AI Funding Assistant
                </p>

                <h3 className="mt-2 text-4xl font-black">
                  Startup Success Prediction
                </h3>
              </div>

              <div className="rounded-3xl bg-gradient-to-r from-violet-500 to-cyan-400 p-4 text-white">
                <Bot className="h-7 w-7" />
              </div>
            </div>

            <div className="mt-8 rounded-[28px] bg-gradient-to-br from-violet-50 to-cyan-50 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-500">
                    AI Score
                  </p>

                  <h4 className="mt-2 text-6xl font-black">
                    94%
                  </h4>
                </div>

                <div className="rounded-3xl bg-white p-4 shadow-lg">
                  <Brain className="h-10 w-10 text-violet-600" />
                </div>
              </div>

              <div className="mt-6 h-4 overflow-hidden rounded-full bg-white">
                <div className="h-full w-[94%] rounded-full bg-gradient-to-r from-violet-500 to-cyan-400" />
              </div>

              <div className="mt-8 space-y-4">
                {[
                  'Strong investor matching',
                  'Excellent traction',
                  'High growth probability',
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl bg-white/80 p-4 text-sm font-medium"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <button className="mt-8 w-full rounded-2xl bg-gradient-to-r from-violet-500 to-cyan-400 px-5 py-4 font-semibold text-white transition hover:scale-[1.02]">
                Analyze Startup
              </button>
            </div>
          </GlassCard>

          {/* LIVE FEED */}
          <GlassCard className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-emerald-600">
                  Live Activity
                </p>

                <h3 className="mt-2 text-3xl font-black">
                  Ecosystem Feed
                </h3>
              </div>

              <Activity className="h-8 w-8 text-emerald-500" />
            </div>

            <div className="mt-8 space-y-4">
              {activities.map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: 4 }}
                  className="flex gap-4 rounded-3xl bg-white/80 p-4"
                >
                  <div className="mt-1 h-3 w-3 rounded-full bg-emerald-500" />

                  <div>
                    <p className="font-medium">
                      {item}
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      Just now
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </GlassCard>

          {/* INVESTORS */}
          <GlassCard className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-cyan-600">
                  Investor Network
                </p>

                <h3 className="mt-2 text-3xl font-black">
                  AI Matched Investors
                </h3>
              </div>

              <Building2 className="h-8 w-8 text-cyan-500" />
            </div>

            <div className="mt-8 space-y-4">
              {investors.map((investor) => (
                <div
                  key={investor.name}
                  className="rounded-3xl bg-white/80 p-5"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-bold">
                        {investor.name}
                      </h4>

                      <p className="text-sm text-slate-500">
                        {investor.focus}
                      </p>
                    </div>

                    <div className="rounded-2xl bg-emerald-100 px-3 py-2 text-sm font-bold text-emerald-700">
                      {investor.match}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>

          {/* GAMIFICATION */}
          <GlassCard className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-pink-600">
                  Founder Reputation
                </p>

                <h3 className="mt-2 text-3xl font-black">
                  Elite Founder
                </h3>
              </div>

              <Trophy className="h-8 w-8 text-yellow-500" />
            </div>

            <div className="mt-8 rounded-[28px] bg-gradient-to-r from-violet-500 to-cyan-400 p-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white/70">
                    XP Progress
                  </p>

                  <h4 className="mt-2 text-5xl font-black">
                    12,840
                  </h4>
                </div>

                <Crown className="h-12 w-12" />
              </div>

              <div className="mt-6 h-4 overflow-hidden rounded-full bg-white/20">
                <div className="h-full w-[82%] rounded-full bg-white" />
              </div>

              <div className="mt-3 flex justify-between text-sm">
                <span>Level 12</span>
                <span>82%</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              {[
                'DAO',
                'Builder',
                'Elite',
              ].map((badge) => (
                <div
                  key={badge}
                  className="rounded-2xl bg-slate-100 p-4 text-center"
                >
                  <Shield className="mx-auto h-6 w-6 text-violet-600" />

                  <p className="mt-2 text-sm font-semibold">
                    {badge}
                  </p>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  )
}
