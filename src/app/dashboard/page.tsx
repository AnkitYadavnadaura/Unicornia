'use client'

import {
  Coins,
  Trophy,
  Briefcase,
  Star,
  Flame,
  Bell,
  Search,
  ArrowUpRight,
  Users,
  Sparkles,
} from 'lucide-react'

export default function IndividualDashboard() {
  const tasks = [
    {
      title: 'Build Landing Page UI',
      startup: 'NeuroStack',
      reward: 500,
      status: 'In Progress',
    },
    {
      title: 'Create Logo Design',
      startup: 'Finovate',
      reward: 300,
      status: 'Pending',
    },
    {
      title: 'Fix Backend APIs',
      startup: 'AI Nexus',
      reward: 700,
      status: 'Completed',
    },
  ]

  return (
    <div className="min-h-screen bg-[#050816] text-white overflow-hidden">
      
      {/* Background Glow */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-pink-500/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-cyan-500/20 blur-[120px] rounded-full"></div>
      </div>

      {/* Navbar */}
      <header className="relative z-10 border-b border-white/10 bg-white/5 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-pink-500 to-violet-500 flex items-center justify-center text-2xl font-black shadow-lg shadow-pink-500/30">
              U
            </div>

            <div>
              <h1 className="text-2xl font-black">
                Unicornia
              </h1>

              <p className="text-sm text-white/50">
                Individual Dashboard
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition">
              <Bell size={20} />
            </button>

            <div className="flex items-center gap-3 rounded-2xl bg-white/5 border border-white/10 px-4 py-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500"></div>

              <div>
                <p className="font-semibold">
                  Ankit
                </p>

                <p className="text-xs text-white/50">
                  Full Stack Builder
                </p>
              </div>
            </div>
          </div>

        </div>
      </header>

      {/* Main */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 py-10">

        {/* Hero */}
        <div className="rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-2xl p-10 overflow-hidden relative">
          
          <div className="absolute top-0 right-0 w-72 h-72 bg-pink-500/20 blur-[100px] rounded-full"></div>

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
            
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-pink-500/20 border border-pink-500/30 px-5 py-2 text-pink-300 text-sm font-semibold mb-6">
                <Sparkles size={16} />
                Top 5% Contributor
              </div>

              <h2 className="text-5xl md:text-6xl font-black leading-tight">
                Welcome back,
                <span className="block bg-gradient-to-r from-pink-500 via-violet-500 to-cyan-500 bg-clip-text text-transparent">
                  Ankit
                </span>
              </h2>

              <p className="text-white/60 text-lg mt-6 max-w-2xl">
                Complete startup tasks, earn XP, collect Unicorn Tokens,
                and build your reputation inside the ecosystem.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-5 w-full max-w-md">

              <div className="rounded-3xl bg-black/30 border border-white/10 p-6">
                <Coins className="text-yellow-400 mb-4" size={30} />

                <h3 className="text-3xl font-black">
                  12,450
                </h3>

                <p className="text-white/50 mt-2">
                  Tokens Earned
                </p>
              </div>

              <div className="rounded-3xl bg-black/30 border border-white/10 p-6">
                <Trophy className="text-cyan-400 mb-4" size={30} />

                <h3 className="text-3xl font-black">
                  Level 14
                </h3>

                <p className="text-white/50 mt-2">
                  Reputation Level
                </p>
              </div>

              <div className="rounded-3xl bg-black/30 border border-white/10 p-6">
                <Flame className="text-pink-400 mb-4" size={30} />

                <h3 className="text-3xl font-black">
                  89
                </h3>

                <p className="text-white/50 mt-2">
                  Tasks Completed
                </p>
              </div>

              <div className="rounded-3xl bg-black/30 border border-white/10 p-6">
                <Users className="text-violet-400 mb-4" size={30} />

                <h3 className="text-3xl font-black">
                  24
                </h3>

                <p className="text-white/50 mt-2">
                  Startup Connections
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* Sections */}
        <div className="grid lg:grid-cols-3 gap-8 mt-10">

          {/* Tasks */}
          <div className="lg:col-span-2 rounded-[35px] border border-white/10 bg-white/5 backdrop-blur-xl p-8">
            
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-3xl font-black">
                Active Tasks
              </h3>

              <button className="flex items-center gap-2 rounded-2xl bg-violet-500 px-5 py-3 font-semibold hover:scale-105 transition">
                <Search size={18} />
                Explore Tasks
              </button>
            </div>

            <div className="space-y-5">
              {tasks.map((task, index) => (
                <div
                  key={index}
                  className="rounded-3xl border border-white/10 bg-black/20 p-6 hover:border-pink-500/30 transition"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                    
                    <div>
                      <h4 className="text-2xl font-bold">
                        {task.title}
                      </h4>

                      <p className="text-white/50 mt-2">
                        {task.startup}
                      </p>
                    </div>

                    <div className="flex items-center gap-4">
                      
                      <div className="rounded-2xl bg-yellow-500/10 border border-yellow-500/20 px-5 py-3">
                        <p className="text-yellow-400 font-bold">
                          +{task.reward} UT
                        </p>
                      </div>

                      <div className="rounded-2xl bg-cyan-500/10 border border-cyan-500/20 px-5 py-3">
                        <p className="text-cyan-400 font-semibold">
                          {task.status}
                        </p>
                      </div>

                      <button className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition">
                        <ArrowUpRight />
                      </button>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-8">

            {/* XP Card */}
            <div className="rounded-[35px] border border-white/10 bg-white/5 backdrop-blur-xl p-8">
              
              <div className="flex items-center gap-4 mb-6">
                <Star className="text-pink-400" size={30} />

                <h3 className="text-2xl font-black">
                  XP Progress
                </h3>
              </div>

              <div className="w-full h-5 rounded-full bg-white/10 overflow-hidden">
                <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-pink-500 to-cyan-500"></div>
              </div>

              <div className="flex justify-between mt-4 text-sm text-white/50">
                <span>720 XP</span>
                <span>1000 XP</span>
              </div>
            </div>

            {/* Skills */}
            <div className="rounded-[35px] border border-white/10 bg-white/5 backdrop-blur-xl p-8">
              
              <h3 className="text-2xl font-black mb-6">
                Top Skills
              </h3>

              <div className="flex flex-wrap gap-3">
                {[
                  'React',
                  'Next.js',
                  'UI/UX',
                  'Python',
                  'AI',
                  'Tailwind',
                ].map((skill) => (
                  <div
                    key={skill}
                    className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            {/* Opportunities */}
            <div className="rounded-[35px] border border-white/10 bg-gradient-to-r from-pink-500/20 to-cyan-500/20 p-8">
              
              <Briefcase size={35} className="mb-5" />

              <h3 className="text-3xl font-black">
                18 New Opportunities
              </h3>

              <p className="text-white/60 mt-4">
                Startups are actively looking for developers,
                designers, and AI builders.
              </p>

              <button className="mt-6 w-full rounded-2xl bg-white text-black py-4 font-black hover:scale-105 transition">
                Explore Now
              </button>
            </div>

          </div>
        </div>

      </main>
    </div>
  )
}
