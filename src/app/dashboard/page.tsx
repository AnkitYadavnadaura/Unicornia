'use client'

import {
  LayoutDashboard,
  Briefcase,
  Trophy,
  Coins,
  Bell,
  Search,
  Star,
  Flame,
  CheckCircle2,
  // Wallet,
  Settings,
  Crown,
} from 'lucide-react'

export default function IndividualDashboard() {
  const tasks = [
    {
      title: 'Build AI Landing Page',
      startup: 'NeuroStack',
      reward: 500,
      status: 'In Progress',
    },
    {
      title: 'Design Investor Deck',
      startup: 'Finovate',
      reward: 300,
      status: 'Pending',
    },
    {
      title: 'Create Next.js Dashboard',
      startup: 'Aether AI',
      reward: 800,
      status: 'Completed',
    },
  ]

  return (
    <div className="flex min-h-screen bg-[#f5f7fb]">

      {/* SIDEBAR */}
      <aside className="w-[260px] bg-[#081120] text-white p-5 flex flex-col justify-between">

        <div>

          <div className="flex items-center justify-between mb-10">
            <div>
              <h1 className="text-2xl font-black">
                UNICORNIA
              </h1>

              <p className="text-white/50 text-sm">
                Individual Workspace
              </p>
            </div>
          </div>

          <div className="space-y-4">

            <button className="w-full flex items-center gap-4 rounded-2xl bg-gradient-to-r from-pink-500 to-violet-500 px-5 py-4 font-semibold">
              <LayoutDashboard size={20} />
              Dashboard
            </button>

            <button className="w-full flex items-center gap-4 rounded-2xl bg-white/5 border border-white/10 px-5 py-4">
              <Briefcase size={20} />
              Opportunities
            </button>

            <button className="w-full flex items-center gap-4 rounded-2xl bg-white/5 border border-white/10 px-5 py-4">
              <CheckCircle2 size={20} />
              Tasks
            </button>

            <button className="w-full flex items-center gap-4 rounded-2xl bg-white/5 border border-white/10 px-5 py-4">
              <Coins size={20} />
              Wallet
            </button>

            <button className="w-full flex items-center gap-4 rounded-2xl bg-white/5 border border-white/10 px-5 py-4">
              <Trophy size={20} />
              Leaderboard
            </button>

            <button className="w-full flex items-center gap-4 rounded-2xl bg-white/5 border border-white/10 px-5 py-4">
              <Settings size={20} />
              Settings
            </button>

          </div>
        </div>

        {/* Rank Card */}
        <div className="rounded-3xl bg-gradient-to-br from-pink-500/20 to-violet-500/20 border border-pink-500/20 p-6">

          <div className="flex items-center gap-3 mb-5">
            <Crown className="text-yellow-400" />
            <h3 className="font-bold">
              Builder Rank
            </h3>
          </div>

          <h2 className="text-5xl font-black">
            #12
          </h2>

          <p className="text-white/60 mt-4">
            Top contributors in Unicornia ecosystem
          </p>
        </div>

      </aside>

      {/* MAIN */}
      <main className="flex-1 p-6">

        {/* NAVBAR */}
        <div className="bg-white rounded-[30px] p-5 flex items-center justify-between shadow-sm">

          <div>
            <h2 className="text-2xl font-black">
              Welcome back, Ankit 👋
            </h2>

            <p className="text-gray-500 mt-1">
              Your contribution ecosystem is growing rapidly.
            </p>
          </div>

          <div className="flex items-center gap-4">

            <div className="flex items-center gap-3 bg-[#f5f7fb] px-5 py-3 rounded-2xl w-[320px]">
              <Search size={18} className="text-gray-400" />

              <input
                placeholder="Search opportunities..."
                className="bg-transparent outline-none w-full"
              />
            </div>

            <button className="w-14 h-14 rounded-2xl bg-[#f5f7fb] flex items-center justify-center">
              <Bell />
            </button>

            <button className="rounded-2xl bg-black text-white px-6 py-4 font-semibold">
              Explore Tasks
            </button>

          </div>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-4 gap-6 mt-8">

          <div className="bg-white rounded-[30px] p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500">
                  Tokens Earned
                </p>

                <h2 className="text-5xl font-black mt-3">
                  12K
                </h2>
              </div>

              <div className="w-16 h-16 rounded-2xl bg-yellow-100 flex items-center justify-center">
                <Coins className="text-yellow-500" />
              </div>
            </div>

            <div className="mt-8 h-2 rounded-full bg-gray-100 overflow-hidden">
              <div className="w-[75%] h-full bg-yellow-500 rounded-full"></div>
            </div>
          </div>

          <div className="bg-white rounded-[30px] p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500">
                  XP Level
                </p>

                <h2 className="text-5xl font-black mt-3">
                  14
                </h2>
              </div>

              <div className="w-16 h-16 rounded-2xl bg-pink-100 flex items-center justify-center">
                <Star className="text-pink-500" />
              </div>
            </div>

            <div className="mt-8 h-2 rounded-full bg-gray-100 overflow-hidden">
              <div className="w-[60%] h-full bg-pink-500 rounded-full"></div>
            </div>
          </div>

          <div className="bg-white rounded-[30px] p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500">
                  Completed Tasks
                </p>

                <h2 className="text-5xl font-black mt-3">
                  89
                </h2>
              </div>

              <div className="w-16 h-16 rounded-2xl bg-cyan-100 flex items-center justify-center">
                <CheckCircle2 className="text-cyan-500" />
              </div>
            </div>

            <div className="mt-8 h-2 rounded-full bg-gray-100 overflow-hidden">
              <div className="w-[82%] h-full bg-cyan-500 rounded-full"></div>
            </div>
          </div>

          <div className="bg-white rounded-[30px] p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500">
                  Contribution Streak
                </p>

                <h2 className="text-5xl font-black mt-3">
                  28
                </h2>
              </div>

              <div className="w-16 h-16 rounded-2xl bg-violet-100 flex items-center justify-center">
                <Flame className="text-violet-500" />
              </div>
            </div>

            <div className="mt-8 h-2 rounded-full bg-gray-100 overflow-hidden">
              <div className="w-[90%] h-full bg-violet-500 rounded-full"></div>
            </div>
          </div>

        </div>

        {/* TASKS + PROFILE */}
        <div className="grid grid-cols-3 gap-6 mt-8">

          {/* TASK BOARD */}
          <div className="col-span-2 bg-white rounded-[30px] shadow-sm">

            <div className="p-8 border-b border-gray-100 flex items-center justify-between">
              <div>
                <h3 className="text-3xl font-black">
                  Active Tasks
                </h3>

                <p className="text-gray-500 mt-2">
                  Tasks assigned by startups
                </p>
              </div>

              <button className="rounded-2xl bg-black text-white px-6 py-4 font-semibold">
                Browse Tasks
              </button>
            </div>

            <div className="p-6 space-y-5">

              {tasks.map((task, index) => (
                <div
                  key={index}
                  className="rounded-3xl border border-gray-100 p-6 flex items-center justify-between"
                >
                  <div>
                    <h4 className="text-2xl font-bold">
                      {task.title}
                    </h4>

                    <p className="text-gray-500 mt-2">
                      {task.startup}
                    </p>

                    <div className="flex items-center gap-3 mt-4">

                      <span className="px-4 py-2 rounded-full bg-yellow-100 text-yellow-700 text-sm font-semibold">
                        +{task.reward} UT
                      </span>

                      <span className="px-4 py-2 rounded-full bg-cyan-100 text-cyan-700 text-sm font-semibold">
                        {task.status}
                      </span>

                    </div>
                  </div>

                  <button className="rounded-2xl bg-black text-white px-6 py-4 font-semibold">
                    Open
                  </button>
                </div>
              ))}

            </div>
          </div>

          {/* PROFILE */}
          <div className="space-y-6">

            <div className="bg-white rounded-[30px] p-8 shadow-sm">

              <div className="flex flex-col items-center text-center">

                <div className="w-28 h-28 rounded-[30px] bg-gradient-to-r from-pink-500 to-violet-500 mb-5"></div>

                <h3 className="text-3xl font-black">
                  Ankit Yadav
                </h3>

                <p className="text-gray-500 mt-2">
                  Full Stack + AI Builder
                </p>

                <button className="mt-6 rounded-2xl bg-black text-white px-6 py-4 font-semibold">
                  Edit Profile
                </button>

              </div>
            </div>

            <div className="bg-white rounded-[30px] p-8 shadow-sm">

              <h3 className="text-2xl font-black mb-6">
                Skills
              </h3>

              <div className="flex flex-wrap gap-3">

                {[
                  'Next.js',
                  'React',
                  'AI',
                  'Python',
                  'Tailwind',
                  'UI/UX',
                ].map((skill) => (
                  <div
                    key={skill}
                    className="px-5 py-3 rounded-full bg-[#f5f7fb] font-semibold"
                  >
                    {skill}
                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>

      </main>
    </div>
  )
}
