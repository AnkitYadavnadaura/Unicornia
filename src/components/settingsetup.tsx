'use client'

import { motion } from 'framer-motion'
import {
  Bell,
  Bot,
  Brain,
  Check,
  ChevronRight,
  CreditCard,
  Crown,
  Database,
  Globe,
  KeyRound,
  Lock,
  Moon,
  Palette,
  Rocket,
  Shield,
  Sparkles,
  User,
  Wallet,
  Zap,
} from 'lucide-react'

const settingCards = [
  {
    title: 'Profile & Identity',
    icon: User,
    color: 'from-violet-500 to-cyan-400',
    desc: 'Manage founder identity, startup profile and public ecosystem presence.',
  },
  {
    title: 'Security & Privacy',
    icon: Shield,
    color: 'from-emerald-500 to-cyan-400',
    desc: '2FA, sessions, wallet permissions and startup security controls.',
  },
  {
    title: 'AI Preferences',
    icon: Brain,
    color: 'from-indigo-500 to-violet-500',
    desc: 'Control AI assistant behavior, startup evaluations and automation.',
  },
  {
    title: 'Notifications',
    icon: Bell,
    color: 'from-pink-500 to-violet-500',
    desc: 'Funding alerts, DAO votes, investor requests and ecosystem updates.',
  },
]

const preferences = [
  'Enable AI startup evaluations',
  'Receive investor match alerts',
  'Enable DAO governance notifications',
  'Show public founder reputation',
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

export default function SettingsPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#f8fbff] via-[#f7f5ff] to-[#f7ffff] p-6">
      {/* Gradient Orbs */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-violet-300/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-300/20 blur-3xl" />

      <div className="relative z-10 grid grid-cols-12 gap-6">
        {/* LEFT CONTENT */}
        <div className="col-span-12 xl:col-span-8 space-y-6">
          {/* HEADER */}
          <GlassCard className="overflow-hidden p-8">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-sm font-semibold text-violet-700">
                  <Sparkles className="h-4 w-4" />
                  Unicornia System Settings
                </div>

                <h1 className="mt-6 text-5xl font-black tracking-tight text-slate-900">
                  Startup Operating
                  <span className="bg-gradient-to-r from-violet-600 to-cyan-500 bg-clip-text text-transparent">
                    {' '}
                    Settings
                  </span>
                </h1>

                <p className="mt-4 max-w-2xl text-lg text-slate-600">
                  Configure your founder identity, AI systems, security, ecosystem reputation and startup controls.
                </p>
              </div>

              <div className="flex gap-4">
                <button className="rounded-2xl border border-slate-200 bg-white px-6 py-4 font-semibold transition hover:scale-105">
                  Export Data
                </button>

                <button className="rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-500 px-6 py-4 font-semibold text-white shadow-lg transition hover:scale-105">
                  Save Changes
                </button>
              </div>
            </div>

            {/* TOP STATS */}
            <div className="mt-10 grid gap-4 md:grid-cols-4">
              {[
                {
                  icon: Crown,
                  value: 'Elite',
                  label: 'Founder Rank',
                },
                {
                  icon: Wallet,
                  value: '$18.4M',
                  label: 'Treasury Access',
                },
                {
                  icon: Bot,
                  value: 'AI Enabled',
                  label: 'Automation',
                },
                {
                  icon: Lock,
                  value: 'Secured',
                  label: 'System Status',
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-3xl bg-white/80 p-5 shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <item.icon className="h-10 w-10 rounded-2xl bg-gradient-to-r from-violet-500 to-cyan-400 p-2 text-white" />

                    <div className="h-3 w-3 rounded-full bg-emerald-500" />
                  </div>

                  <h3 className="mt-5 text-2xl font-black">
                    {item.value}
                  </h3>

                  <p className="text-sm text-slate-500">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </GlassCard>

          {/* SETTINGS GRID */}
          <div className="grid gap-6 md:grid-cols-2">
            {settingCards.map((card) => (
              <GlassCard
                key={card.title}
                className="group p-6"
              >
                <div className="flex items-start justify-between">
                  <div
                    className={`flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-r ${card.color} text-white shadow-lg`}
                  >
                    <card.icon className="h-8 w-8" />
                  </div>

                  <button className="rounded-2xl bg-white px-4 py-2 text-sm font-semibold shadow-sm transition hover:scale-105">
                    Configure
                  </button>
                </div>

                <h3 className="mt-6 text-3xl font-black">
                  {card.title}
                </h3>

                <p className="mt-4 leading-relaxed text-slate-600">
                  {card.desc}
                </p>

                <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-violet-600">
                  Open Settings
                  <ChevronRight className="h-4 w-4" />
                </div>
              </GlassCard>
            ))}
          </div>

          {/* ACCOUNT SETTINGS */}
          <GlassCard className="p-8">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-violet-600">
                  Account Management
                </p>

                <h3 className="mt-2 text-4xl font-black">
                  Founder Profile
                </h3>
              </div>

              <User className="h-10 w-10 text-violet-600" />
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              <div>
                <label className="mb-3 block text-sm font-semibold text-slate-600">
                  Founder Name
                </label>

                <input
                  type="text"
                  defaultValue="Ankit Yadav"
                  className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 outline-none transition focus:border-violet-400"
                />
              </div>

              <div>
                <label className="mb-3 block text-sm font-semibold text-slate-600">
                  Startup Name
                </label>

                <input
                  type="text"
                  defaultValue="Unicornia"
                  className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 outline-none transition focus:border-violet-400"
                />
              </div>

              <div>
                <label className="mb-3 block text-sm font-semibold text-slate-600">
                  Ecosystem Role
                </label>

                <input
                  type="text"
                  defaultValue="Founder"
                  className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 outline-none transition focus:border-violet-400"
                />
              </div>

              <div>
                <label className="mb-3 block text-sm font-semibold text-slate-600">
                  Wallet Address
                </label>

                <input
                  type="text"
                  defaultValue="0xUNX94823..."
                  className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 outline-none transition focus:border-violet-400"
                />
              </div>
            </div>

            <button className="mt-8 rounded-2xl bg-gradient-to-r from-violet-500 to-cyan-400 px-6 py-4 font-semibold text-white transition hover:scale-105">
              Update Profile
            </button>
          </GlassCard>

          {/* SECURITY */}
          <GlassCard className="p-8">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-emerald-600">
                  Security Systems
                </p>

                <h3 className="mt-2 text-4xl font-black">
                  Startup Protection
                </h3>
              </div>

              <Shield className="h-10 w-10 text-emerald-500" />
            </div>

            <div className="mt-8 grid gap-4">
              {[
                'Two-Factor Authentication',
                'DAO Governance Protection',
                'Treasury Security Layer',
                'Investor Access Verification',
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center justify-between rounded-3xl bg-white/80 p-5"
                >
                  <div className="flex items-center gap-4">
                    <div className="rounded-2xl bg-emerald-100 p-3 text-emerald-600">
                      <Check className="h-5 w-5" />
                    </div>

                    <div>
                      <h4 className="font-semibold">
                        {item}
                      </h4>

                      <p className="text-sm text-slate-500">
                        Enabled & Active
                      </p>
                    </div>
                  </div>

                  <button className="rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold">
                    Manage
                  </button>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="col-span-12 xl:col-span-4 space-y-6">
          {/* AI SETTINGS */}
          <GlassCard className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-indigo-600">
                  AI Configuration
                </p>

                <h3 className="mt-2 text-3xl font-black">
                  Unicornia AI Core
                </h3>
              </div>

              <Brain className="h-8 w-8 text-indigo-500" />
            </div>

            <div className="mt-8 rounded-[28px] bg-gradient-to-br from-violet-50 to-cyan-50 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-500">
                    AI Automation
                  </p>

                  <h4 className="mt-2 text-5xl font-black">
                    94%
                  </h4>
                </div>

                <div className="rounded-3xl bg-white p-4 shadow-lg">
                  <Bot className="h-10 w-10 text-violet-600" />
                </div>
              </div>

              <div className="mt-6 h-4 overflow-hidden rounded-full bg-white">
                <div className="h-full w-[94%] rounded-full bg-gradient-to-r from-violet-500 to-cyan-400" />
              </div>

              <div className="mt-8 space-y-4">
                {preferences.map((item) => (
                  <div
                    key={item}
                    className="flex items-center justify-between rounded-2xl bg-white/80 p-4"
                  >
                    <span className="text-sm font-medium">
                      {item}
                    </span>

                    <div className="h-6 w-11 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 p-1">
                      <div className="ml-auto h-4 w-4 rounded-full bg-white" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </GlassCard>

          {/* APPEARANCE */}
          <GlassCard className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-pink-600">
                  Appearance
                </p>

                <h3 className="mt-2 text-3xl font-black">
                  UI Preferences
                </h3>
              </div>

              <Palette className="h-8 w-8 text-pink-500" />
            </div>

            <div className="mt-8 space-y-4">
              {[
                {
                  icon: Moon,
                  title: 'Dark Mode',
                },
                {
                  icon: Sparkles,
                  title: 'Glassmorphism UI',
                },
                {
                  icon: Zap,
                  title: 'Motion Effects',
                },
                {
                  icon: Globe,
                  title: 'Public Profile',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex items-center justify-between rounded-3xl bg-white/80 p-5"
                >
                  <div className="flex items-center gap-4">
                    <div className="rounded-2xl bg-gradient-to-r from-violet-500 to-cyan-400 p-3 text-white">
                      <item.icon className="h-5 w-5" />
                    </div>

                    <span className="font-semibold">
                      {item.title}
                    </span>
                  </div>

                  <div className="h-6 w-11 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 p-1">
                    <div className="ml-auto h-4 w-4 rounded-full bg-white" />
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>

          {/* SYSTEM */}
          <GlassCard className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-cyan-600">
                  System Modules
                </p>

                <h3 className="mt-2 text-3xl font-black">
                  Startup OS
                </h3>
              </div>

              <Database className="h-8 w-8 text-cyan-500" />
            </div>

            <div className="mt-8 space-y-4">
              {[
                {
                  icon: Rocket,
                  title: 'Pitch Arena',
                },
                {
                  icon: CreditCard,
                  title: 'Treasury System',
                },
                {
                  icon: KeyRound,
                  title: 'Wallet Access',
                },
                {
                  icon: Briefcase,
                  title: 'Investor Hub',
                },
              ].map((module) => (
                <div
                  key={module.title}
                  className="flex items-center justify-between rounded-3xl bg-white/80 p-5"
                >
                  <div className="flex items-center gap-4">
                    <div className="rounded-2xl bg-gradient-to-r from-violet-500 to-cyan-400 p-3 text-white">
                      <module.icon className="h-5 w-5" />
                    </div>

                    <div>
                      <h4 className="font-semibold">
                        {module.title}
                      </h4>

                      <p className="text-sm text-slate-500">
                        Active Module
                      </p>
                    </div>
                  </div>

                  <div className="h-3 w-3 rounded-full bg-emerald-500" />
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  )
}
