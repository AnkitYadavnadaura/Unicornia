'use client'

import { useMemo, useState } from 'react'
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
  Settings,
  Crown,
  Plus,
  Wallet,
  User,
  // Calendar,
  // MessageCircle,
  X,
  // ChevronRight,
  // Sparkles,
  // TrendingUp,
  // Target,
  // Zap,
  // Clock3,
  FolderKanban,
  Rocket,
  // Award,
  // Activity,
  // Send,
  // Filter,
  Menu,
  // BarChart3,
  // Bookmark,
  // Heart,
  // Eye,
  // ArrowUpRight,
} from 'lucide-react'

type TaskType = {
  id: number
  title: string
  startup: string
  reward: number
  status: string
  priority: string
  due: string
  description: string
}

export default function IndividualDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [, setActiveTab] = useState('dashboard')
  const [search, setSearch] = useState('')
  const [notificationsOpen, setNotificationsOpen] = useState(false)
  const [profileOpen, setProfileOpen] = useState(false)
  const [, setShowTaskModal] = useState(false)
  const [, setShowOpportunityModal] = useState(false)
  const [, setWalletOpen] = useState(false)
  const [, setSettingsOpen] = useState(false)
  const [, setSelectedTask] = useState<TaskType | null>(null)
  const [taskInput, setTaskInput] = useState('')
  const [savedTasks, setSavedTasks] = useState<number[]>([])
  const [likedTasks, setLikedTasks] = useState<number[]>([])
  const [completedTasks, setCompletedTasks] = useState<number[]>([])
  const [notifications, ] = useState([
    'New startup invited you',
    'Task reward received',
    'XP level increased',
  ])

  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Build AI Landing Page',
      startup: 'NeuroStack',
      reward: 500,
      status: 'In Progress',
      priority: 'High',
      due: 'Today',
      description:
        'Create a premium AI startup landing page using Next.js and Tailwind.',
    },
    {
      id: 2,
      title: 'Design Investor Deck',
      startup: 'Finovate',
      reward: 300,
      status: 'Pending',
      priority: 'Medium',
      due: 'Tomorrow',
      description:
        'Create pitch deck slides for seed funding presentation.',
    },
    {
      id: 3,
      title: 'Create SaaS Dashboard',
      startup: 'Aether AI',
      reward: 800,
      status: 'Completed',
      priority: 'High',
      due: '2 Days',
      description:
        'Develop analytics dashboard UI and API integration.',
    },
    {
      id: 4,
      title: 'Build Realtime Chat App',
      startup: 'FlowSync',
      reward: 950,
      status: 'Pending',
      priority: 'High',
      due: 'This Week',
      description:
        'Socket.io based realtime messaging platform.',
    },
  ])

  const filteredTasks = useMemo(() => {
    return tasks.filter((task) =>
      task.title.toLowerCase().includes(search.toLowerCase())
    )
  }, [search, tasks])

  const addQuickTask = () => {
    if (!taskInput) return

    const newTask = {
      id: Date.now(),
      title: taskInput,
      startup: 'Community Startup',
      reward: 250,
      status: 'Pending',
      priority: 'Low',
      due: 'Next Week',
      description: 'New community generated task.',
    }

    setTasks([newTask, ...tasks])
    setTaskInput('')
  }

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleSave = (id: number) => {
    if (savedTasks.includes(id)) {
      setSavedTasks(savedTasks.filter((taskId) => taskId !== id))
    } else {
      setSavedTasks([...savedTasks, id])
    }
  }

  const toggleLike = (id: number) => {
    if (likedTasks.includes(id)) {
      setLikedTasks(likedTasks.filter((taskId) => taskId !== id))
    } else {
      setLikedTasks([...likedTasks, id])
    }
  }

  const markCompleted = (id: number) => {
    if (!completedTasks.includes(id)) {
      setCompletedTasks([...completedTasks, id])
    }
  }

  return (
    <div className="min-h-screen bg-[#f5f7fb] flex overflow-hidden">
      {/* SIDEBAR */}
      <aside
        className={`${
          sidebarOpen ? 'w-[270px]' : 'w-[90px]'
        } bg-[#081120] text-white transition-all duration-300 flex flex-col justify-between p-5`}
      >
        <div>
          <div className="flex items-center justify-between mb-10">
            {sidebarOpen && (
              <div>
                <h1 className="text-3xl font-black tracking-tight">
                  UNICORNIA
                </h1>

                <p className="text-white/50 text-sm mt-1">
                  Individual Workspace
                </p>
              </div>
            )}

            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center"
            >
              <Menu />
            </button>
          </div>

          <div className="space-y-4">
            <button
              onClick={() => setActiveTab('dashboard')}
              className="w-full flex items-center gap-4 rounded-2xl bg-gradient-to-r from-pink-500 to-violet-500 px-5 py-4 font-semibold"
            >
              <LayoutDashboard />
              {sidebarOpen && 'Dashboard'}
            </button>

            <button
              onClick={() => setActiveTab('opportunities')}
              className="w-full flex items-center gap-4 rounded-2xl bg-white/5 border border-white/10 px-5 py-4"
            >
              <Briefcase />
              {sidebarOpen && 'Opportunities'}
            </button>

            <button
              onClick={() => setActiveTab('tasks')}
              className="w-full flex items-center gap-4 rounded-2xl bg-white/5 border border-white/10 px-5 py-4"
            >
              <FolderKanban />
              {sidebarOpen && 'Tasks'}
            </button>

            <button
              onClick={() => setWalletOpen(true)}
              className="w-full flex items-center gap-4 rounded-2xl bg-white/5 border border-white/10 px-5 py-4"
            >
              <Wallet />
              {sidebarOpen && 'Wallet'}
            </button>

            <button
              onClick={() => setActiveTab('leaderboard')}
              className="w-full flex items-center gap-4 rounded-2xl bg-white/5 border border-white/10 px-5 py-4"
            >
              <Trophy />
              {sidebarOpen && 'Leaderboard'}
            </button>

            <button
              onClick={() => setSettingsOpen(true)}
              className="w-full flex items-center gap-4 rounded-2xl bg-white/5 border border-white/10 px-5 py-4"
            >
              <Settings />
              {sidebarOpen && 'Settings'}
            </button>
          </div>
        </div>

        <div className="rounded-3xl bg-gradient-to-br from-pink-500/20 to-violet-500/20 border border-pink-500/20 p-6">
          <div className="flex items-center gap-3 mb-5">
            <Crown className="text-yellow-400" />
            {sidebarOpen && <h3 className="font-bold">Builder Rank</h3>}
          </div>

          {sidebarOpen && (
            <>
              <h2 className="text-5xl font-black">#12</h2>

              <p className="text-white/60 mt-4">
                Top contributors in Unicornia ecosystem
              </p>
            </>
          )}
        </div>
      </aside>

      {/* MAIN */}
      <main className="flex-1 overflow-y-auto p-6">
        {/* TOPBAR */}
        <div className="bg-white rounded-[30px] p-6 shadow-sm flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-black">
              Welcome back, Ankit 👋
            </h2>

            <p className="text-gray-500 mt-2">
              Build your reputation and earn tokens.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-[#f5f7fb] rounded-2xl px-5 py-4 flex items-center gap-3 w-[340px]">
              <Search className="text-gray-400" size={18} />

              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search tasks, startups, opportunities"
                className="bg-transparent outline-none w-full"
              />
            </div>

            <button
              onClick={() => setNotificationsOpen(true)}
              className="w-14 h-14 rounded-2xl bg-[#f5f7fb] flex items-center justify-center"
            >
              <Bell />
            </button>

            <button
              onClick={() => setProfileOpen(true)}
              className="w-14 h-14 rounded-2xl bg-gradient-to-r from-pink-500 to-violet-500 text-white flex items-center justify-center"
            >
              <User />
            </button>
          </div>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-4 gap-6 mt-8">
          <div className="bg-white rounded-[30px] p-6 shadow-sm hover:scale-[1.02] transition">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500">Tokens Earned</p>
                <h3 className="text-5xl font-black mt-4">12.5K</h3>
              </div>

              <div className="w-16 h-16 rounded-2xl bg-yellow-100 flex items-center justify-center">
                <Coins className="text-yellow-500" />
              </div>
            </div>

            <div className="mt-8 h-2 bg-gray-100 rounded-full overflow-hidden">
              <div className="w-[80%] h-full bg-yellow-500 rounded-full"></div>
            </div>
          </div>

          <div className="bg-white rounded-[30px] p-6 shadow-sm hover:scale-[1.02] transition">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500">XP Level</p>
                <h3 className="text-5xl font-black mt-4">14</h3>
              </div>

              <div className="w-16 h-16 rounded-2xl bg-pink-100 flex items-center justify-center">
                <Star className="text-pink-500" />
              </div>
            </div>

            <div className="mt-8 h-2 bg-gray-100 rounded-full overflow-hidden">
              <div className="w-[65%] h-full bg-pink-500 rounded-full"></div>
            </div>
          </div>

          <div className="bg-white rounded-[30px] p-6 shadow-sm hover:scale-[1.02] transition">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500">Completed Tasks</p>
                <h3 className="text-5xl font-black mt-4">89</h3>
              </div>

              <div className="w-16 h-16 rounded-2xl bg-cyan-100 flex items-center justify-center">
                <CheckCircle2 className="text-cyan-500" />
              </div>
            </div>

            <div className="mt-8 h-2 bg-gray-100 rounded-full overflow-hidden">
              <div className="w-[90%] h-full bg-cyan-500 rounded-full"></div>
            </div>
          </div>

          <div className="bg-white rounded-[30px] p-6 shadow-sm hover:scale-[1.02] transition">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500">Contribution Streak</p>
                <h3 className="text-5xl font-black mt-4">28</h3>
              </div>

              <div className="w-16 h-16 rounded-2xl bg-violet-100 flex items-center justify-center">
                <Flame className="text-violet-500" />
              </div>
            </div>

            <div className="mt-8 h-2 bg-gray-100 rounded-full overflow-hidden">
              <div className="w-[95%] h-full bg-violet-500 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* CONTENT */}
        <div className="grid grid-cols-3 gap-6 mt-8">
          {/* TASK SECTION */}
          <div className="col-span-2 bg-white rounded-[30px] shadow-sm overflow-hidden">
            <div className="p-8 border-b border-gray-100 flex items-center justify-between">
              <div>
                <h3 className="text-3xl font-black">Active Tasks</h3>
                <p className="text-gray-500 mt-2">
                  Work with startups and earn rewards.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setShowOpportunityModal(true)}
                  className="rounded-2xl bg-[#f5f7fb] px-5 py-4 font-semibold"
                >
                  Explore
                </button>

                <button
                  onClick={() => setShowTaskModal(true)}
                  className="rounded-2xl bg-black text-white px-6 py-4 font-semibold"
                >
                  + Add Task
                </button>
              </div>
            </div>

            <div className="p-6 space-y-5">
              <div className="flex items-center gap-4">
                <input
                  value={taskInput}
                  onChange={(e) => setTaskInput(e.target.value)}
                  placeholder="Create custom task"
                  className="flex-1 px-5 py-4 rounded-2xl border border-gray-200 outline-none"
                />

                <button
                  onClick={addQuickTask}
                  className="rounded-2xl bg-black text-white px-6 py-4 font-semibold"
                >
                  Create
                </button>
              </div>

              {filteredTasks.map((task) => (
                <div
                  key={task.id}
                  className="rounded-[30px] border border-gray-100 p-6 hover:border-pink-200 transition"
                >
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <div className="flex items-center gap-3">
                        <h4 className="text-2xl font-bold">{task.title}</h4>

                        {completedTasks.includes(task.id) && (
                          <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-semibold">
                            Completed
                          </span>
                        )}
                      </div>

                      <p className="text-gray-500 mt-2">{task.startup}</p>

                      <p className="text-gray-600 mt-4 max-w-2xl">
                        {task.description}
                      </p>

                      <div className="flex items-center gap-3 mt-5 flex-wrap">
                        <span className="px-4 py-2 rounded-full bg-yellow-100 text-yellow-700 text-sm font-semibold">
                          +{task.reward} UT
                        </span>

                        <span className="px-4 py-2 rounded-full bg-cyan-100 text-cyan-700 text-sm font-semibold">
                          {task.status}
                        </span>

                        <span className="px-4 py-2 rounded-full bg-pink-100 text-pink-700 text-sm font-semibold">
                          {task.priority}
                        </span>

                        <span className="px-4 py-2 rounded-full bg-violet-100 text-violet-700 text-sm font-semibold">
                          Due: {task.due}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col gap-3">
                      <button
                        onClick={() => {
                          setSelectedTask(task)
                          setShowTaskModal(true)
                        }}
                        className="rounded-2xl bg-black text-white px-5 py-3 font-semibold"
                      >
                        Open
                      </button>

                      <button
                        onClick={() => toggleSave(task.id)}
                        className="rounded-2xl bg-[#f5f7fb] px-5 py-3 font-semibold"
                      >
                        {savedTasks.includes(task.id)
                          ? 'Saved'
                          : 'Save'}
                      </button>

                      <button
                        onClick={() => toggleLike(task.id)}
                        className="rounded-2xl bg-[#f5f7fb] px-5 py-3 font-semibold"
                      >
                        {likedTasks.includes(task.id)
                          ? 'Liked'
                          : 'Like'}
                      </button>

                      <button
                        onClick={() => markCompleted(task.id)}
                        className="rounded-2xl bg-green-500 text-white px-5 py-3 font-semibold"
                      >
                        Complete
                      </button>

                      <button
                        onClick={() => deleteTask(task.id)}
                        className="rounded-2xl border border-red-200 text-red-500 px-5 py-3 font-semibold"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="space-y-6">
            <div className="bg-white rounded-[30px] p-8 shadow-sm">
              <div className="flex flex-col items-center text-center">
                <div className="w-28 h-28 rounded-[30px] bg-gradient-to-r from-pink-500 to-violet-500"></div>

                <h3 className="text-3xl font-black mt-6">
                  Ankit Yadav
                </h3>

                <p className="text-gray-500 mt-2">
                  Full Stack + AI Builder
                </p>

                <div className="flex items-center gap-3 mt-6">
                  <button
                    onClick={() => setProfileOpen(true)}
                    className="rounded-2xl bg-black text-white px-5 py-4 font-semibold"
                  >
                    Edit Profile
                  </button>

                  <button className="rounded-2xl bg-[#f5f7fb] px-5 py-4 font-semibold">
                    Share
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[30px] p-8 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-black">Skills</h3>

                <button className="w-12 h-12 rounded-2xl bg-[#f5f7fb] flex items-center justify-center">
                  <Plus />
                </button>
              </div>

              <div className="flex flex-wrap gap-3">
                {[
                  'Next.js',
                  'React',
                  'AI',
                  'Python',
                  'Tailwind',
                  'UI/UX',
                  'Supabase',
                  'Node.js',
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

            <div className="bg-gradient-to-br from-black to-[#111827] text-white rounded-[30px] p-8 shadow-sm overflow-hidden relative">
              <div className="absolute top-0 right-0 w-40 h-40 bg-pink-500/20 rounded-full blur-3xl"></div>

              <div className="relative z-10">
                <Rocket className="mb-5" size={40} />

                <h3 className="text-3xl font-black leading-tight">
                  Unlock Pro Builder Features
                </h3>

                <p className="text-white/60 mt-4">
                  Access premium opportunities and startup collaborations.
                </p>

                <button className="mt-6 rounded-2xl bg-white text-black px-6 py-4 font-black">
                  Upgrade
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* NOTIFICATION MODAL */}
      {notificationsOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-[30px] w-full max-w-xl p-8">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-3xl font-black">Notifications</h3>

              <button
                onClick={() => setNotificationsOpen(false)}
                className="w-12 h-12 rounded-2xl bg-[#f5f7fb] flex items-center justify-center"
              >
                <X />
              </button>
            </div>

            <div className="space-y-4">
              {notifications.map((item, index) => (
                <div
                  key={index}
                  className="p-5 rounded-2xl bg-[#f5f7fb] flex items-center justify-between"
                >
                  <p className="font-medium">{item}</p>

                  <button className="text-sm font-semibold text-pink-500">
                    View
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* PROFILE MODAL */}
      {profileOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-[30px] w-full max-w-2xl p-8">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-3xl font-black">Edit Profile</h3>

              <button
                onClick={() => setProfileOpen(false)}
                className="w-12 h-12 rounded-2xl bg-[#f5f7fb] flex items-center justify-center"
              >
                <X />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-5">
              <input
                placeholder="Full Name"
                className="px-5 py-4 rounded-2xl border border-gray-200 outline-none"
              />

              <input
                placeholder="Role"
                className="px-5 py-4 rounded-2xl border border-gray-200 outline-none"
              />

              <input
                placeholder="GitHub"
                className="px-5 py-4 rounded-2xl border border-gray-200 outline-none"
              />

              <input
                placeholder="LinkedIn"
                className="px-5 py-4 rounded-2xl border border-gray-200 outline-none"
              />
            </div>

            <textarea
              placeholder="About yourself"
              className="mt-5 w-full min-h-[160px] px-5 py-4 rounded-2xl border border-gray-200 outline-none"
            />

            <button className="mt-6 rounded-2xl bg-black text-white px-8 py-4 font-semibold">
              Save Changes
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
