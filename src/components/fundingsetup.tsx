'use client'

import { motion } from 'framer-motion'
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Bot,
  Brain,
  Briefcase,
  Building2,
  CheckCircle2,
  ChevronRight,
  CircleDollarSign,
  Clock3,
  Copy,
  Crown,
  Flame,
  Gem,
  Gift,
  Globe,
  Layers3,
  Lightbulb,
  Link2,
  Medal,
  Orbit,
  Rocket,
  ShieldCheck,
  Sparkles,
  Star,
  TrendingUp,
  Trophy,
  Users,
  Wallet,
  Zap,
} from 'lucide-react'

const fundingCards = [
  {
    title: 'Refer & Earn Tokens',
    icon: Link2,
    color: 'from-violet-500 to-cyan-400',
    stats: [
      { label: 'Tokens Earned', value: '48,200' },
      { label: 'Invites', value: '182' },
      { label: 'Growth', value: '+128%' },
    ],
    features: [
      'Referral Analytics',
      'Multi-Level Rewards',
      'Ambassador Badges',
      'Streak Rewards',
      'Referral Leaderboard',
    ],
    buttons: ['Copy Link', 'Invite Team', 'Share', 'View Analytics'],
  },
  {
    title: 'Pitch Arena',
    icon: Rocket,
    color: 'from-indigo-500 to-violet-500',
    stats: [
      { label: 'Funding Pool', value: '$2.4M' },
      { label: 'Live Events', value: '14' },
      { label: 'Investor Score', value: '94%' },
    ],
    features: [
      'AI Startup Evaluation',
      'Investor Matching',
      'Community Voting',
      'Live Pitch Rooms',
      'Startup Rankings',
    ],
    buttons: ['Submit Pitch', 'Join Event', 'View Investors', 'Start Live Pitch'],
  },
  {
    title: 'Serve Unicornia',
    icon: Globe,
    color: 'from-emerald-500 to-cyan-400',
    stats: [
      { label: 'Contribution XP', value: '12,840' },
      { label: 'Weekly Missions', value: '18' },
      { label: 'Reputation', value: 'Elite' },
    ],
    features: [
      'Contribution Heatmap',
      'XP Progression',
      'Open Source Rewards',
      'Mentorship Missions',
      'Achievement Badges',
    ],
    buttons: ['Start Contribution', 'Complete Missions', 'View Rewards', 'Join Community'],
  },
]

const investors = [
  {
    name: 'Nova Capital',
    range: '$50K - $1M',
    match: '96%',
    startups: 24,
    focus: 'AI / SaaS',
  },
  {
    name: 'Orbit Ventures',
    range: '$100K - $5M',
    match: '91%',
    startups: 42,
    focus: 'Web3 / Infra',
  },
  {
    name: 'Vertex Angels',
    range: '$25K - $500K',
    match: '88%',
    startups: 15,
    focus: 'Fintech',
  },
]

const liveActivities = [
  'NeuroSync raised $240K from Orbit Ventures',
  '5,000 UNX tokens distributed to contributors',
  'Pitch Arena Season 8 started',
  'A new investor joined Unicornia DAO',
  'Builder mission completed by 124 founders',
]

const leaderboard = [
  { name: 'Aether Labs', score: '98,210', badge: 'Legendary' },
  { name: 'NovaStack', score: '87,420', badge: 'Elite' },
  { name: 'Zenbyte AI', score: '81,900', badge: 'Rising' },
]

function FloatingOrb({
  className,
}: {
  className: string
}) {
  return (
    <motion.div
      animate={{
        y: [0, -20, 0],
        x: [0, 15, 0],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      className={`absolute rounded-full blur-3xl opacity-30 ${className}`}
    />
  )
}

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
        y: -6,
        scale: 1.01,
      }}
      transition={{ duration: 0.25 }}
      className={`relative overflow-hidden rounded-[34px] border border-white/60 bg-white/70 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.06)] ${className}`}
    >
      {children}
    </motion.div>
  )
}

export default function UnicorniaFundingDashboard() {
  return (
    <div className="min-h-screen overflow-hidden bg-gradient-to-br from-[#f8fbff] via-[#f6f4ff] to-[#f8fffd] text-slate-900">
      {/* Floating Background */}
      <FloatingOrb className="h-72 w-72 bg-violet-400 top-0 left-0" />
      <FloatingOrb className="h-96 w-96 bg-cyan-300 top-40 right-0" />
      <FloatingOrb className="h-72 w-72 bg-emerald-300 bottom-0 left-1/3" />

      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-white/40 bg-white/60 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-r from-violet-500 to-cyan-400 text-white shadow-lg">
              <Orbit className="h-6 w-6" />
            </div>

            <div>
              <h1 className="text-xl font-bold">Unicornia</h1>
              <p className="text-sm text-slate-500">
                Startup Nation Operating System
              </p>
            </div>
          </div>

          <div className="hidden items-center gap-8 md:flex">
            {[
              'Funding',
              'Pitch Arena',
              'Investors',
              'Leaderboard',
              'DAO',
            ].map((item) => (
              <button
                key={item}
                className="text-sm font-medium text-slate-600 transition hover:text-black"
              >
                {item}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button className="rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold transition hover:scale-105">
              Dashboard
            </button>

            <button className="rounded-2xl bg-gradient-to-r from-violet-500 to-cyan-400 px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:scale-105">
              Launch Startup
            </button>
          </div>
        </div>
      </header>

      <main className="relative mx-auto max-w-7xl px-6 py-10">
        {/* Hero */}
        <section className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <GlassCard className="p-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-sm font-medium text-violet-700">
              <Sparkles className="h-4 w-4" />
              Futuristic Startup Economy
            </div>

            <h1 className="mt-6 max-w-3xl text-5xl font-black leading-tight tracking-tight md:text-7xl">
              Earn Funding &
              <span className="bg-gradient-to-r from-violet-600 via-indigo-500 to-cyan-500 bg-clip-text text-transparent">
                {' '}
                Tokens
              </span>{' '}
              in Unicornia
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
              Contribute, build, pitch, collaborate and grow inside the Unicornia startup nation.
            </p>

            <div className="mt-10 grid gap-5 sm:grid-cols-3">
              {[
                {
                  icon: Wallet,
                  title: 'Funding Distributed',
                  value: '$18.4M',
                },
                {
                  icon: Users,
                  title: 'Active Founders',
                  value: '48K+',
                },
                {
                  icon: Zap,
                  title: 'Token Velocity',
                  value: '92%',
                },
              ].map((stat) => (
                <motion.div
                  key={stat.title}
                  whileHover={{ scale: 1.03 }}
                  className="rounded-3xl border border-white/50 bg-white/80 p-5 shadow-lg"
                >
                  <div className="flex items-center justify-between">
                    <stat.icon className="h-10 w-10 rounded-2xl bg-gradient-to-r from-violet-500 to-cyan-400 p-2 text-white" />
                    <TrendingUp className="h-5 w-5 text-emerald-500" />
                  </div>

                  <h3 className="mt-5 text-3xl font-black">{stat.value}</h3>
                  <p className="mt-1 text-sm text-slate-500">{stat.title}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <button className="group flex items-center gap-2 rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-500 px-6 py-4 font-semibold text-white shadow-xl transition hover:scale-105">
                Explore Funding
                <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
              </button>

              <button className="rounded-2xl border border-slate-200 bg-white px-6 py-4 font-semibold transition hover:scale-105">
                View Ecosystem
              </button>
            </div>
          </GlassCard>

          {/* AI Assistant */}
          <GlassCard className="p-8">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-violet-600">
                  AI Funding Assistant
                </p>

                <h2 className="mt-2 text-3xl font-black">
                  Startup Success Prediction
                </h2>
              </div>

              <div className="rounded-3xl bg-gradient-to-r from-violet-500 to-cyan-400 p-4 text-white">
                <Bot className="h-8 w-8" />
              </div>
            </div>

            <div className="mt-8 rounded-[28px] border border-white/50 bg-gradient-to-br from-violet-50 to-cyan-50 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500">
                    AI Startup Score
                  </p>

                  <h3 className="mt-2 text-5xl font-black">94%</h3>
                </div>

                <div className="rounded-3xl bg-white p-4 shadow-lg">
                  <Brain className="h-10 w-10 text-violet-600" />
                </div>
              </div>

              <div className="mt-6 h-4 overflow-hidden rounded-full bg-white">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '94%' }}
                  transition={{ duration: 1.4 }}
                  className="h-full rounded-full bg-gradient-to-r from-violet-500 to-cyan-400"
                />
              </div>

              <div className="mt-8 space-y-4">
                {[
                  'Strong investor matching detected',
                  'High traction probability',
                  'Excellent community growth score',
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl bg-white/80 p-4"
                  >
                    <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <button className="mt-8 flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-violet-500 to-cyan-400 px-5 py-4 font-semibold text-white transition hover:scale-[1.02]">
                Analyze Startup Profile
              </button>
            </div>
          </GlassCard>
        </section>

        {/* Funding Methods */}
        <section className="mt-14">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h2 className="text-4xl font-black">
                Funding Methods
              </h2>
              <p className="mt-2 text-slate-500">
                Multiple paths to earn tokens, reputation and capital.
              </p>
            </div>

            <button className="rounded-2xl border border-slate-200 bg-white px-5 py-3 font-semibold transition hover:scale-105">
              View All Systems
            </button>
          </div>

          <div className="grid gap-8 xl:grid-cols-3">
            {fundingCards.map((card) => (
              <GlassCard
                key={card.title}
                className="group p-8"
              >
                <div className="absolute right-0 top-0 h-48 w-48 bg-gradient-to-r opacity-10 blur-3xl group-hover:opacity-20" />

                <div className="flex items-center justify-between">
                  <div
                    className={`flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-r ${card.color} text-white shadow-lg`}
                  >
                    <card.icon className="h-8 w-8" />
                  </div>

                  <button className="rounded-2xl bg-white px-4 py-2 text-sm font-semibold shadow-md transition hover:scale-105">
                    Explore
                  </button>
                </div>

                <h3 className="mt-8 text-3xl font-black">
                  {card.title}
                </h3>

                <div className="mt-6 grid grid-cols-3 gap-3">
                  {card.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-2xl bg-white/80 p-4"
                    >
                      <p className="text-xs text-slate-500">
                        {stat.label}
                      </p>

                      <h4 className="mt-2 text-lg font-black">
                        {stat.value}
                      </h4>
                    </div>
                  ))}
                </div>

                {/* Fake Graph */}
                <div className="mt-8 flex h-32 items-end gap-2 rounded-3xl bg-gradient-to-br from-slate-50 to-white p-5">
                  {[30, 60, 42, 78, 55, 88, 100].map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ delay: i * 0.08 }}
                      className={`w-full rounded-full bg-gradient-to-t ${card.color}`}
                    />
                  ))}
                </div>

                <div className="mt-8 space-y-3">
                  {card.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-3 rounded-2xl bg-white/70 px-4 py-3"
                    >
                      <BadgeCheck className="h-5 w-5 text-emerald-500" />
                      <span className="text-sm font-medium">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 grid grid-cols-2 gap-3">
                  {card.buttons.map((btn) => (
                    <button
                      key={btn}
                      className="rounded-2xl border border-white/60 bg-white/90 px-4 py-3 text-sm font-semibold transition hover:scale-105 hover:bg-gradient-to-r hover:from-violet-500 hover:to-cyan-400 hover:text-white"
                    >
                      {btn}
                    </button>
                  ))}
                </div>
              </GlassCard>
            ))}
          </div>
        </section>

        {/* Dashboard Widgets */}
        <section className="mt-14 grid gap-8 lg:grid-cols-3">
          {/* Leaderboard */}
          <GlassCard className="p-8">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-violet-600">
                  Funding Leaderboard
                </p>
                <h3 className="mt-2 text-3xl font-black">
                  Top Builders
                </h3>
              </div>

              <Crown className="h-8 w-8 text-yellow-500" />
            </div>

            <div className="mt-8 space-y-4">
              {leaderboard.map((user, idx) => (
                <motion.div
                  key={user.name}
                  whileHover={{ x: 5 }}
                  className="flex items-center justify-between rounded-3xl bg-white/80 p-5"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-r from-violet-500 to-cyan-400 text-lg font-black text-white">
                      {idx + 1}
                    </div>

                    <div>
                      <h4 className="font-bold">{user.name}</h4>
                      <p className="text-sm text-slate-500">
                        {user.badge}
                      </p>
                    </div>
                  </div>

                  <div className="text-right">
                    <h4 className="font-black">{user.score}</h4>
                    <p className="text-xs text-slate-500">
                      Reputation
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </GlassCard>

          {/* Live Activity */}
          <GlassCard className="p-8">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-cyan-600">
                  Live Funding Activity
                </p>

                <h3 className="mt-2 text-3xl font-black">
                  Real-Time Feed
                </h3>
              </div>

              <div className="flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-600">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Live
              </div>
            </div>

            <div className="mt-8 space-y-4">
              {liveActivities.map((activity, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-start gap-4 rounded-3xl bg-white/80 p-5"
                >
                  <div className="mt-1 rounded-2xl bg-gradient-to-r from-violet-500 to-cyan-400 p-2 text-white">
                    <Sparkles className="h-4 w-4" />
                  </div>

                  <div>
                    <p className="font-medium leading-relaxed">
                      {activity}
                    </p>

                    <div className="mt-2 flex items-center gap-2 text-xs text-slate-500">
                      <Clock3 className="h-3 w-3" />
                      Just now
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </GlassCard>

          {/* Token Economy */}
          <GlassCard className="p-8">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-emerald-600">
                  Token Economy
                </p>

                <h3 className="mt-2 text-3xl font-black">
                  UNX Ecosystem
                </h3>
              </div>

              <Gem className="h-8 w-8 text-violet-600" />
            </div>

            <div className="mt-8 grid gap-4">
              {[
                {
                  label: 'Total Supply',
                  value: '1B UNX',
                },
                {
                  label: 'Rewards Distributed',
                  value: '184M',
                },
                {
                  label: 'DAO Treasury',
                  value: '$42M',
                },
                {
                  label: 'Active Contributors',
                  value: '48,210',
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-3xl bg-white/80 p-5"
                >
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-slate-500">
                      {item.label}
                    </p>

                    <BarChart3 className="h-5 w-5 text-violet-500" />
                  </div>

                  <h4 className="mt-3 text-2xl font-black">
                    {item.value}
                  </h4>
                </div>
              ))}
            </div>
          </GlassCard>
        </section>

        {/* Investor Network */}
        <section className="mt-14">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h2 className="text-4xl font-black">
                Investor Network
              </h2>

              <p className="mt-2 text-slate-500">
                AI-matched investors inside the Unicornia ecosystem.
              </p>
            </div>

            <button className="rounded-2xl bg-gradient-to-r from-violet-500 to-cyan-400 px-5 py-3 font-semibold text-white transition hover:scale-105">
              Open Investor Hub
            </button>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {investors.map((investor) => (
              <GlassCard
                key={investor.name}
                className="p-8"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-r from-violet-500 to-cyan-400 text-white">
                      <Building2 className="h-8 w-8" />
                    </div>

                    <h3 className="mt-6 text-3xl font-black">
                      {investor.name}
                    </h3>

                    <p className="mt-2 text-slate-500">
                      {investor.focus}
                    </p>
                  </div>

                  <div className="rounded-2xl bg-emerald-100 px-4 py-2 text-sm font-bold text-emerald-700">
                    {investor.match} Match
                  </div>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="rounded-2xl bg-white/80 p-4">
                    <p className="text-xs text-slate-500">
                      Funding Range
                    </p>

                    <h4 className="mt-2 font-black">
                      {investor.range}
                    </h4>
                  </div>

                  <div className="rounded-2xl bg-white/80 p-4">
                    <p className="text-xs text-slate-500">
                      Active Startups
                    </p>

                    <h4 className="mt-2 font-black">
                      {investor.startups}
                    </h4>
                  </div>
                </div>

                <button className="mt-8 flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-violet-500 to-cyan-400 px-5 py-4 font-semibold text-white transition hover:scale-[1.02]">
                  Connect Investor
                  <ChevronRight className="h-5 w-5" />
                </button>
              </GlassCard>
            ))}
          </div>
        </section>

        {/* Gamification */}
        <section className="mt-14 grid gap-8 lg:grid-cols-2">
          <GlassCard className="p-8">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-violet-600">
                  Founder Reputation
                </p>

                <h3 className="mt-2 text-4xl font-black">
                  Elite Founder Level
                </h3>
              </div>

              <Trophy className="h-10 w-10 text-yellow-500" />
            </div>

            <div className="mt-8 rounded-[32px] bg-gradient-to-r from-violet-500 to-cyan-400 p-8 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white/70">
                    Current XP
                  </p>

                  <h4 className="mt-2 text-5xl font-black">
                    12,840
                  </h4>
                </div>

                <div className="rounded-3xl bg-white/20 p-4 backdrop-blur-xl">
                  <Flame className="h-10 w-10" />
                </div>
              </div>

              <div className="mt-8">
                <div className="mb-2 flex justify-between text-sm">
                  <span>Level 12</span>
                  <span>Next: 15,000 XP</span>
                </div>

                <div className="h-4 overflow-hidden rounded-full bg-white/20">
                  <div className="h-full w-[82%] rounded-full bg-white" />
                </div>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                'Elite Founder',
                'DAO Member',
                'Top Builder',
              ].map((badge) => (
                <div
                  key={badge}
                  className="rounded-3xl bg-white/80 p-5 text-center"
                >
                  <Medal className="mx-auto h-8 w-8 text-violet-600" />
                  <p className="mt-3 text-sm font-semibold">
                    {badge}
                  </p>
                </div>
              ))}
            </div>
          </GlassCard>

          <GlassCard className="p-8">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-cyan-600">
                  Startup War Room
                </p>

                <h3 className="mt-2 text-4xl font-black">
                  Collaboration Quests
                </h3>
              </div>

              <ShieldCheck className="h-10 w-10 text-cyan-500" />
            </div>

            <div className="mt-8 space-y-5">
              {[
                {
                  title: 'Build AI Plugin Ecosystem',
                  reward: '4,500 UNX',
                },
                {
                  title: 'Mentor Early Founders',
                  reward: '2,100 UNX',
                },
                {
                  title: 'Complete DAO Governance Mission',
                  reward: '1,400 UNX',
                },
              ].map((quest) => (
                <motion.div
                  key={quest.title}
                  whileHover={{ scale: 1.02 }}
                  className="rounded-3xl bg-white/80 p-5"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-bold">
                        {quest.title}
                      </h4>

                      <p className="mt-1 text-sm text-slate-500">
                        Community Mission
                      </p>
                    </div>

                    <div className="rounded-2xl bg-gradient-to-r from-violet-500 to-cyan-400 px-4 py-2 text-sm font-bold text-white">
                      {quest.reward}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <button className="mt-8 flex w-full items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-4 font-semibold transition hover:scale-[1.02]">
              Open Mission Center
            </button>
          </GlassCard>
        </section>
      </main>
    </div>
  )
}
