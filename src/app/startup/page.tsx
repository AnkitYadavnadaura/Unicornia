'use client'
import { useState } from 'react';
//import { motion } from 'framer-motion';
import {
  Rocket,
  Users,
  Wallet,
  Search,
  Activity,
  Briefcase,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Crown
} from "lucide-react";

export default function UnicorniaDashboard() {
  const [activeTab, setActiveTab] = useState('Dashboard');
  //const [, setSelectedStartup] = useState('NeuroVerse');
  const [walletBalance, setWalletBalance] = useState(2840000);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [ ,setTaskFilter] = useState('All');

  const sidebarItems = [
    'Dashboard',
    'Startups',
    'Team',
    'Tasks',
    'Marketplace',
    'Wallet',
    'Analytics',
    'Settings',
  ];
 

  const tasks = [
    'Build investor analytics panel',
    'Deploy AI startup recommendation engine',
    'Improve wallet transaction UI',
    'Create token staking system',
  ];

  const freelancers = [
    {
      name: 'Aryan Singh',
      skill: 'Full Stack Developer',
      rate: '₹4,500/project',
    },
    {
      name: 'Sneha Kapoor',
      skill: 'Brand Designer',
      rate: '₹3,200/project',
    },
    {
      name: 'Kabir Raj',
      skill: 'AI Engineer',
      rate: '₹7,000/project',
    },
  ];
  const statsCards = [
  {
    title: "Team Members",
    value: 248,
  },
  {
    title: "Tasks in pending",
    value: 1482,
  },
  {
    title: "Tasks in Progress",
    value: 326,
  },
  {
    title: "Remaining Budget",
    value: "2.8M",
  },
];

const [tasks, setTasks] = useState([
  {
    id: 1,
    title: "Build investor analytics panel",
    status: "In Progress",
    priority: "High",
    assignee: "AY",
    due: "Today",
  },
  {
    id: 2,
    title: "Deploy AI startup recommendation engine",
    status: "Pending",
    priority: "Medium",
    assignee: "RS",
    due: "Tomorrow",
  },
  {
    id: 3,
    title: "Improve wallet transaction UI",
    status: "Completed",
    priority: "Low",
    assignee: "AV",
    due: "Completed",
  },
  {
    id: 4,
    title: "Create token staking system",
    status: "In Progress",
    priority: "High",
    assignee: "AY",
    due: "2 Days",
  },
]);

const [taskFilter, setTaskFilter] = useState("All");
const [newTask, setNewTask] = useState("");
  const filteredTasks =
  taskFilter === "All"
    ? tasks
    : tasks.filter((task) => task.status === taskFilter);

const addTask = () => {
  if (!newTask.trim()) return;

  setTasks([
    ...tasks,
    {
      id: Date.now(),
      title: newTask,
      status: "Pending",
      priority: "Medium",
      assignee: "AY",
      due: "New",
    },
  ]);

  setNewTask("");
};

const toggleTaskStatus = (id: number) => {
  setTasks(
    tasks.map((task) =>
      task.id === id
        ? {
            ...task,
            status:
              task.status === "Completed"
                ? "Pending"
                : "Completed",
          }
        : task
    )
  );
};

const deleteTask = (id: number) => {
  setTasks(tasks.filter((task) => task.id !== id));
};
  
const teamMembers = [
  {
    id: 1,
    name: "Ankit Yadav",
    role: "Founder & Vision Lead",
    tasks: 12,
    performance: 94,
    status: "Online",
    initials: "AY",
  },
  {
    id: 2,
    name: "Riya Sharma",
    role: "UI/UX Designer",
    tasks: 8,
    performance: 88,
    status: "Working",
    initials: "RS",
  },
  {
    id: 3,
    name: "Aman Verma",
    role: "Backend Engineer",
    tasks: 15,
    performance: 91,
    status: "Busy",
    initials: "AV",
  },
];

  return (
    <div className="min-h-screen bg-[#050816] text-white overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(168,85,247,0.28),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(236,72,153,0.22),transparent_30%),radial-gradient(circle_at_center,rgba(59,130,246,0.14),transparent_40%)]" />

      <div className="relative flex min-h-screen">
        {/* Sidebar */}
        <aside
          className={`${sidebarCollapsed ? 'w-[110px]' : 'w-[260px]'} min-h-screen border-r border-white/10 bg-[#0B1120]/95 backdrop-blur-3xl p-6 flex flex-col justify-between sticky top-0 transition-all duration-300`}
        >
          <div>
            <div className="flex items-center justify-between mb-12">
              <div className="flex items-center gap-4">

                {!sidebarCollapsed && (
                  <div>
                    {/* <h1 className="text-base font-semibold tracking-tight">UNICORNIA</h1> */}
                    {/* <p className="text-xs text-gray-400">Startup Civilization</p> */}
                  </div>
                )}
              </div>

              <button
                onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center"
              >
                ☰
              </button>
            </div>

            <div className="space-y-3">
              {sidebarItems.map((title, index) => {
                const icons = [
                  Rocket,
                  Sparkles,
                  Users,
                  CheckCircle2,
                  Briefcase,
                  Wallet,
                  Activity,
                  ShieldCheck,
                ];

                const Icon = icons[index];

                return (
                  <button
                    key={title}
                    onClick={() => setActiveTab(title)}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-2xl border transition-all duration-300 ${
                      activeTab === title
                        ? 'bg-gradient-to-r from-pink-500 to-violet-500 border-transparent text-white'
                        : 'bg-white/5 border-white/10 hover:bg-white/10 text-gray-300'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="w-4 h-4" />

                      {!sidebarCollapsed && (
                        <span className="text-sm font-medium">{title}</span>
                      )}
                    </div>

                    {!sidebarCollapsed && activeTab === title && (
                      <div className="w-2 h-2 rounded-full bg-white" />
                    )}
                  </button>
                );
              })}
            </div>
          

          <div className="relative overflow-hidden rounded-3xl border border-pink-500/20 bg-gradient-to-br from-pink-500/20 to-violet-500/20 p-6">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-pink-500/30 rounded-full blur-3xl" />

            <div className="relative">
              <div className="flex items-center gap-3 mb-4">
                <Crown className="text-yellow-400" />
                <p className="font-semibold">Founder Rank</p>
              </div>

              <h2 className="text-3xl font-bold">#07</h2>
              <p className="text-green-400 mt-3">Top 1% startup builders</p>
            </div>
          </div>
            </div>
        </aside>

        {/* Main Area */}
        <main className="flex-1 bg-[#F5F7FB] text-black overflow-y-auto">
<div className="h-16 bg-white border-b border-gray-200 px-6 flex items-center justify-between sticky top-0 z-50">
<div>
<h1 className="text-lg font-semibold">UNICORNIA</h1>
<p className="text-xs text-gray-500">Manage startups, teams, tasks & services</p>
</div>
<div className="flex items-center gap-4">
<div className="relative">
<Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
<input placeholder="Search anything..." className="pl-11 pr-4 py-3 rounded-xl border border-gray-200 bg-gray-50 outline-none w-72" />
</div>
<button className="px-5 py-3 rounded-xl bg-black text-white">Create Startup</button>
</div>
</div>
<div className="p-6 space-y-8 max-w-[1700px] mx-auto">
<section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
<div className="xl:col-span-4 flex items-center justify-between bg-gradient-to-r from-black to-gray-900 text-white rounded-2xl p-6 mb-2 shadow-xl">
<div>
<h2 className="text-lg font-semibold">Welcome back, Ankit 👋</h2>
<p className="text-gray-400 mt-2">Your startup ecosystem is growing rapidly today.</p>
</div>
<div className="flex gap-4">
<button className="px-5 py-3 rounded-2xl bg-white text-black font-semibold">Create Startup</button>
<button className="px-5 py-3 rounded-2xl border border-white/20">Invite Team</button>
</div>
</div>
{statsCards.map((card) => (
<div key={card.title} className="bg-white rounded-3xl border border-gray-200 p-6 shadow-sm">
<p className="text-gray-500 text-xs">{card.title}</p>
<h2 className="text-lg font-semibold mt-4">{card.value}</h2>
</div>
))}
</section>
  {/* 
<section className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
<div className="p-6 border-b border-gray-100 flex justify-between items-center">
<div>
<h2 className="text-lg font-semibold">Startup Listings</h2>
<p className="text-gray-500 text-xs">Professional startup management panel</p>
</div>
<button className="px-4 py-2 rounded-xl bg-black text-white">+ Add Startup</button>
</div>
<div className="overflow-x-auto">
<table className="w-full min-w-[900px]">
<thead className="bg-gray-50">
<tr>
<th className="text-left px-6 py-4">Startup</th>
<th className="text-left px-6 py-4">Category</th>
<th className="text-left px-6 py-4">Members</th>
<th className="text-left px-6 py-4">Tokens</th>
<th className="text-left px-6 py-4">Status</th>
<th className="text-left px-6 py-4">Actions</th>
</tr>
</thead>
<tbody>
{startups.map((startup)=>(
<tr key={startup.name} className="border-t border-gray-100 hover:bg-gray-50">
<td className="px-6 py-5 font-semibold">{startup.name}</td>
<td className="px-6 py-5">{startup.category}</td>
<td className="px-6 py-5">{startup.members}</td>
<td className="px-6 py-5 text-pink-600 font-bold">{startup.tokens}</td>
<td className="px-6 py-5">
<span className="px-3 py-2 rounded-full bg-green-100 text-green-700 text-xs font-semibold">Active</span>
</td>
<td className="px-6 py-5 flex gap-3">
<button onClick={()=>setSelectedStartup(startup.name)} className="px-4 py-2 rounded-lg bg-black text-white text-xs">Open</button>
<button className="px-4 py-2 rounded-lg border border-gray-300 text-xs">Analytics</button>
</td>
</tr>
))}
</tbody>
</table>
</div>
</section> */}
<section className="grid grid-cols-1 xl:grid-cols-2 gap-6">
<section className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden">

  {/* Header */}
  <div className="flex items-center justify-between p-6 border-b border-gray-100">
    <div>
      <h2 className="text-xl font-semibold">
        Team Members
      </h2>

      <p className="text-sm text-gray-500 mt-1">
        Manage roles, productivity and access
      </p>
    </div>

    <button
      className="px-5 py-3 rounded-2xl bg-black text-white text-sm font-medium hover:scale-105 active:scale-95 transition-all"
    >
      + Add Member
    </button>
  </div>

  {/* Members */}
  <div className="p-6 space-y-5">

    {teamMembers.map((member) => (
      <div
        key={member.id}
        className="group border border-gray-200 rounded-3xl p-5 hover:shadow-lg hover:border-black/10 transition-all duration-300 cursor-pointer"
      >

        <div className="flex items-center justify-between">

          {/* Left */}
          <div className="flex items-center gap-5">

            {/* Avatar */}
            <div className="relative">
              <div className="w-16 h-16 rounded-2xl bg-black text-white flex items-center justify-center font-bold text-lg">
                {member.initials}
              </div>

              <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-2 border-white bg-green-500" />
            </div>

            {/* Info */}
            <div>
              <h3 className="text-lg font-semibold">
                {member.name}
              </h3>

              <p className="text-sm text-gray-500 mt-1">
                {member.role}
              </p>

              <div className="flex items-center gap-3 mt-3">

                <span className="px-3 py-1 rounded-full bg-gray-100 text-xs font-medium">
                  {member.tasks} Tasks
                </span>

                <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-medium">
                  {member.status}
                </span>

              </div>
            </div>
          </div>

          {/* Right */}
          <div className="flex items-center gap-6">

            {/* Performance */}
            <div className="hidden md:block w-44">
              <div className="flex items-center justify-between mb-2">
                <p className="text-xs text-gray-500">
                  Performance
                </p>

                <p className="text-xs font-semibold">
                  {member.performance}%
                </p>
              </div>

              <div className="w-full h-2 rounded-full bg-gray-100 overflow-hidden">
                <div
                  className="h-full rounded-full bg-black transition-all"
                  style={{
                    width: `${member.performance}%`,
                  }}
                />
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3">

              <button
                className="px-4 py-2 rounded-xl border border-gray-300 text-sm hover:bg-gray-100 transition-all"
              >
                Message
              </button>

              <button
                className="px-4 py-2 rounded-xl bg-black text-white text-sm hover:opacity-90 transition-all"
              >
                View
              </button>

            </div>

          </div>
        </div>
      </div>
    ))}

  </div>
</section>
  <section className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden">

  {/* Header */}
  <div className="p-6 border-b border-gray-100 flex items-center justify-between sticky top-0 bg-white z-10">

    <div>
      <h2 className="text-xl font-semibold">
        Task Board
      </h2>

      <p className="text-sm text-gray-500 mt-1">
        Track startup execution workflow
      </p>
    </div>

    <div className="flex items-center gap-3">

      <select
        value={taskFilter}
        onChange={(e) => setTaskFilter(e.target.value)}
        className="px-4 py-3 rounded-2xl border border-gray-200 outline-none"
      >
        <option>All</option>
        <option>Pending</option>
        <option>In Progress</option>
        <option>Completed</option>
      </select>

    </div>
  </div>

  {/* Add Task */}
  <div className="p-6 border-b border-gray-100 flex gap-3">

    <input
      value={newTask}
      onChange={(e) => setNewTask(e.target.value)}
      placeholder="Create new task..."
      className="flex-1 px-5 py-3 rounded-2xl border border-gray-200 outline-none"
    />

    <button
      onClick={addTask}
      className="px-6 py-3 rounded-2xl bg-black text-white font-medium hover:scale-105 active:scale-95 transition-all"
    >
      Add Task
    </button>

  </div>

  {/* Scrollable Tasks */}
  <div className="max-h-[500px] overflow-y-auto p-6 space-y-4">

    {filteredTasks.map((task) => (

      <div
        key={task.id}
        className="group border border-gray-200 rounded-3xl p-5 hover:shadow-lg transition-all"
      >

        <div className="flex items-center justify-between gap-5">

          {/* Left */}
          <div className="flex items-center gap-4 flex-1">

            <button
              onClick={() => toggleTaskStatus(task.id)}
              className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                task.status === "Completed"
                  ? "bg-black border-black text-white"
                  : "border-gray-300"
              }`}
            >
              {task.status === "Completed" && "✓"}
            </button>

            <div className="flex-1">

              <h3
                className={`font-medium text-base ${
                  task.status === "Completed"
                    ? "line-through text-gray-400"
                    : ""
                }`}
              >
                {task.title}
              </h3>

              <div className="flex items-center gap-3 mt-3 flex-wrap">

                <span className="px-3 py-1 rounded-full bg-gray-100 text-xs font-medium">
                  {task.priority}
                </span>

                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    task.status === "Completed"
                      ? "bg-green-100 text-green-700"
                      : task.status === "In Progress"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-gray-100 text-gray-700"
                  }`}
                >
                  {task.status}
                </span>

                <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-medium">
                  Due: {task.due}
                </span>

              </div>
            </div>
          </div>

          {/* Right */}
          <div className="flex items-center gap-4">

            <div className="w-12 h-12 rounded-2xl bg-black text-white flex items-center justify-center font-semibold">
              {task.assignee}
            </div>

            <button
              onClick={() => deleteTask(task.id)}
              className="px-4 py-2 rounded-xl border border-red-200 text-red-600 hover:bg-red-50 transition-all"
            >
              Delete
            </button>

          </div>

        </div>
      </div>
    ))}

  </div>
</section>
</section>
<div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
<div className="flex items-center justify-between mb-6">
<h2 className="text-lg font-semibold">Task Board</h2>
<select
onChange={(e)=>setTaskFilter(e.target.value)}
className="px-4 py-2 rounded-xl border border-gray-200 bg-white"
>
<option>All</option>
<option>In Progress</option>
<option>Completed</option>
</select>
</div>
<div className="space-y-4">
{tasks.map((task,i)=>(
<div key={i} className="border border-gray-200 rounded-2xl p-5 flex justify-between items-center">
<p>{task}</p>
<button className="px-3 py-2 rounded-lg bg-yellow-100 text-yellow-700 text-xs">In Progress</button>
</div>
))}
</div>
</div>
</section>
<section className="grid grid-cols-1 xl:grid-cols-3 gap-6">
<div className="xl:col-span-2 bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
<div className="flex justify-between items-center mb-6">
<div>
<h2 className="text-lg font-semibold">Service Marketplace</h2>
<p className="text-gray-500 text-xs">Hire skilled individuals</p>
</div>
<button className="px-4 py-2 rounded-xl bg-black text-white">Browse</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
{freelancers.map((person)=>(
<div key={person.name} className="border border-gray-200 rounded-2xl p-5">
<h3 className="text-base font-semibold">{person.name}</h3>
<p className="text-gray-500 mt-1">{person.skill}</p>
<div className="flex justify-between items-center mt-6">
<span className="font-bold">{person.rate}</span>
<button className="px-4 py-2 rounded-xl bg-black text-white text-xs">Hire</button>
</div>
</div>
))}
</div>
</div>
<div className="bg-gradient-to-br from-black to-gray-900 text-white rounded-2xl p-6 shadow-2xl">
<p className="text-gray-400">Wallet Balance</p>
<h2 className="text-3xl font-bold mt-5">{walletBalance.toLocaleString()}</h2>
<p className="text-pink-400 mt-2">UNIC Tokens</p>
<div className="mt-8 p-5 rounded-2xl bg-white/5 border border-white/10">
<p className="text-xs text-gray-400">Monthly Spending</p>
<h3 className="text-base font-semibold mt-2">420K Tokens</h3>
<div className="w-full h-3 bg-white/10 rounded-full mt-4 overflow-hidden">
<div className="w-[68%] h-full bg-gradient-to-r from-pink-500 to-violet-500 rounded-full"></div>
</div>
</div>
<div className="space-y-4 mt-8">
<button onClick={()=>setWalletBalance(walletBalance+50000)} className="w-full py-4 rounded-2xl bg-white text-black font-semibold">Buy Tokens</button>
<button onClick={()=>setWalletBalance(walletBalance-10000)} className="w-full py-4 rounded-2xl border border-white/20">Send Tokens</button>
</div>
</div>
</section>
</div>
</main>
      </div>
    </div>
  );
}
