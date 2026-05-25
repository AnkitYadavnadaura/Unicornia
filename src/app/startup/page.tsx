'use client'
import { useState } from 'react';
import StartupDiscoveryPage from '../../components/startuphub';
import TeamSection from '../../components/teamsetup';
import UnicorniaTasksPage from '../../components/tasksetup';
import UnicorniaMarketplace from '../../components/marketplace';
import UnicorniaWallet from '../../components/walletsetup';
import FundingDashboard from '../../components/fundingsetup1';
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

  const sidebarItems = [
    'Dashboard',
    'Startups',
    'Team',
    'Tasks',
    'Marketplace',
    'Wallet',
    'Funding',
    'Settings',
  ];
 

  const freelancers = [
  {
    id: 1,
    name: "Aryan Singh",
    role: "Full Stack Developer",
    price: "₹4,500",
    rating: 4.9,
    projects: 128,
    status: "Available",
    skills: ["React", "Node", "MongoDB"],
    initials: "AS",
    match: "96%",
  },
  {
    id: 2,
    name: "Sneha Kapoor",
    role: "Brand Designer",
    price: "₹3,200",
    rating: 4.8,
    projects: 84,
    status: "Busy",
    skills: ["Figma", "Branding", "UI/UX"],
    initials: "SK",
    match: "91%",
  },
  {
    id: 3,
    name: "Kabir Raj",
    role: "AI Engineer",
    price: "₹7,000",
    rating: 5.0,
    projects: 62,
    status: "Available",
    skills: ["LLMs", "Python", "ML"],
    initials: "KR",
    match: "98%",
  },
];
  const statsCards = [
  {
    title: "Team Members",
    value: "248",
    growth: "+12%",
    icon: Users,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Tasks Pending",
    value: "1482",
    growth: "+8%",
    icon: Activity,
    color: "from-orange-500 to-yellow-500",
  },
  {
    title: "Tasks In Progress",
    value: "326",
    growth: "+18%",
    icon: Rocket,
    color: "from-violet-500 to-pink-500",
  },
  {
    title: "Remaining Budget",
    value: "2.8M",
    growth: "-4%",
    icon: Wallet,
    color: "from-green-500 to-emerald-500",
  },
];
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
          {activeTab === 'Dashboard' && (
      <>
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

</section>
  <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

  {statsCards.map((card) => {
    const Icon = card.icon;

    return (
      <div
        key={card.title}
        className="relative overflow-hidden bg-white rounded-3xl border border-gray-200 p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
      >

        {/* Glow */}
        <div
          className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${card.color} opacity-10 blur-3xl`}
        />

        {/* Header */}
        <div className="flex items-start justify-between relative z-10">

          <div>
            <p className="text-sm text-gray-500">
              {card.title}
            </p>

            <h2 className="text-4xl font-bold mt-4 tracking-tight">
              {card.value}
            </h2>
          </div>

          <div
            className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${card.color} text-white flex items-center justify-center shadow-lg`}
          >
            <Icon className="w-6 h-6" />
          </div>

        </div>

        {/* Footer */}
        <div className="mt-6 flex items-center justify-between relative z-10">

          <span
            className={`text-sm font-semibold ${
              card.growth.startsWith("+")
                ? "text-green-600"
                : "text-red-500"
            }`}
          >
            {card.growth}
          </span>

          <p className="text-xs text-gray-400">
            This week
          </p>

        </div>

        {/* Progress */}
        <div className="w-full h-2 bg-gray-100 rounded-full mt-4 overflow-hidden">
          <div
            className={`h-full rounded-full bg-gradient-to-r ${card.color}`}
            style={{
              width: `${Math.floor(Math.random() * 40) + 50}%`,
            }}
          />
        </div>

      </div>
    );
  })}
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
<section className="grid grid-cols-1 xl:grid-cols-3 gap-6">
<section className="xl:col-span-2 bg-white rounded-[32px] border border-gray-200 p-7 shadow-sm">

  {/* Header */}
  <div className="flex items-center justify-between mb-8">

    <div>
      <h2 className="text-2xl font-semibold tracking-tight">
        Service Marketplace
      </h2>

      <p className="text-gray-500 mt-2 text-sm">
        Discover startup-ready professionals powered by AI matching
      </p>
    </div>

    <button className="px-5 py-3 rounded-2xl bg-black text-white font-medium hover:scale-105 transition-all">
      Browse Talent
    </button>

  </div>

  {/* Grid */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

    {freelancers.map((person) => (

      <div
        key={person.id}
        className="group relative overflow-hidden border border-gray-200 rounded-[28px] p-6 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
      >

        {/* Glow */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-pink-500/10 to-violet-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-all" />

        {/* Top */}
        <div className="flex items-start justify-between relative z-10">

          <div className="flex items-center gap-4">

            {/* Avatar */}
            <div className="relative">

              <div className="w-16 h-16 rounded-2xl bg-black text-white flex items-center justify-center font-bold text-lg">
                {person.initials}
              </div>

              <div
                className={`absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-2 border-white ${
                  person.status === "Available"
                    ? "bg-green-500"
                    : "bg-orange-400"
                }`}
              />

            </div>

            {/* Info */}
            <div>

              <h3 className="text-lg font-semibold">
                {person.name}
              </h3>

              <p className="text-gray-500 text-sm mt-1">
                {person.role}
              </p>

              <div className="flex items-center gap-3 mt-3">

                <span className="text-xs font-semibold text-green-600">
                  ⭐ {person.rating}
                </span>

                <span className="text-xs text-gray-400">
                  {person.projects} Projects
                </span>

              </div>

            </div>
          </div>

          {/* Match */}
          <div className="px-3 py-2 rounded-2xl bg-green-100 text-green-700 text-xs font-semibold">
            {person.match} Match
          </div>

        </div>

        {/* Skills */}
        <div className="flex flex-wrap gap-2 mt-6 relative z-10">

          {person.skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-2 rounded-xl bg-gray-100 text-xs font-medium"
            >
              {skill}
            </span>
          ))}

        </div>

        {/* Footer */}
        <div className="flex items-center justify-between mt-8 relative z-10">

          <div>
            <p className="text-xs text-gray-400">
              Starting at
            </p>

            <h3 className="text-2xl font-bold mt-1">
              {person.price}
            </h3>
          </div>

          <div className="flex items-center gap-3">

            <button className="px-4 py-3 rounded-2xl border border-gray-200 hover:bg-gray-100 transition-all">
              View
            </button>

            <button className="px-5 py-3 rounded-2xl bg-black text-white hover:scale-105 transition-all">
              Hire
            </button>

          </div>

        </div>

      </div>
    ))}

  </div>
</section>
<div className="relative overflow-hidden bg-gradient-to-br from-[#050816] via-[#0A1024] to-[#111827] text-white rounded-[32px] p-7 shadow-2xl border border-white/10">

  {/* Glow */}
  <div className="absolute top-0 right-0 w-72 h-72 bg-pink-500/20 blur-3xl rounded-full" />
  <div className="absolute bottom-0 left-0 w-72 h-72 bg-violet-500/20 blur-3xl rounded-full" />

  {/* Header */}
  <div className="relative z-10 flex items-start justify-between">

    <div>
      <p className="text-gray-400 text-sm">
        Wallet Balance
      </p>

      <h2 className="text-5xl font-bold mt-5 tracking-tight">
        {walletBalance.toLocaleString()}
      </h2>

      <p className="text-pink-400 mt-3 font-medium">
        UNIC Tokens
      </p>
    </div>

    <div className="px-4 py-2 rounded-2xl bg-green-500/10 text-green-400 text-sm font-semibold border border-green-500/20">
      +18.4%
    </div>

  </div>

  {/* Analytics */}
  <div className="relative z-10 grid grid-cols-3 gap-4 mt-10">

    <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
      <p className="text-xs text-gray-400">
        Revenue
      </p>

      <h3 className="text-xl font-semibold mt-2">
        820K
      </h3>
    </div>

    <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
      <p className="text-xs text-gray-400">
        Staked
      </p>

      <h3 className="text-xl font-semibold mt-2">
        1.2M
      </h3>
    </div>

    <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
      <p className="text-xs text-gray-400">
        Expenses
      </p>

      <h3 className="text-xl font-semibold mt-2">
        420K
      </h3>
    </div>

  </div>

  {/* Spending */}
  <div className="relative z-10 mt-8 p-5 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl">

    <div className="flex items-center justify-between">
      <p className="text-sm text-gray-400">
        Monthly Spending
      </p>

      <p className="text-sm font-semibold">
        68%
      </p>
    </div>

    <h3 className="text-2xl font-bold mt-3">
      420K Tokens
    </h3>

    <div className="w-full h-3 bg-white/10 rounded-full mt-6 overflow-hidden">
      <div className="w-[68%] h-full rounded-full bg-gradient-to-r from-pink-500 via-violet-500 to-blue-500" />
    </div>

  </div>

  {/* Actions */}
  <div className="relative z-10 grid grid-cols-2 gap-4 mt-8">

    <button
      onClick={() => setWalletBalance(walletBalance + 50000)}
      className="py-4 rounded-2xl bg-white text-black font-semibold hover:scale-[1.02] transition-all"
    >
      Buy Tokens
    </button>

    <button
      onClick={() => setWalletBalance(walletBalance - 10000)}
      className="py-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all"
    >
      Send Tokens
    </button>

    <button className="py-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all">
      Stake
    </button>

    <button className="py-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all">
      Withdraw
    </button>

  </div>

  {/* Transactions */}
  <div className="relative z-10 mt-10">

    <div className="flex items-center justify-between mb-5">
      <h3 className="font-semibold text-lg">
        Recent Transactions
      </h3>

      <button className="text-sm text-pink-400">
        View All
      </button>
    </div>

    <div className="space-y-4">

      {[
        {
          title: "Investor Allocation",
          amount: "+120K",
        },
        {
          title: "Team Salary Distribution",
          amount: "-42K",
        },
        {
          title: "Token Purchase",
          amount: "+18K",
        },
      ].map((item) => (

        <div
          key={item.title}
          className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10"
        >

          <div>
            <p className="font-medium">
              {item.title}
            </p>

            <p className="text-xs text-gray-400 mt-1">
              2 mins ago
            </p>
          </div>

          <h3
            className={`font-semibold ${
              item.amount.startsWith("+")
                ? "text-green-400"
                : "text-red-400"
            }`}
          >
            {item.amount}
          </h3>

        </div>
      ))}

    </div>

  </div>

</div>
</section>
</div>
  </>         )}

          {activeTab === 'Startups' && (
    <StartupDiscoveryPage />
  )}
           {activeTab === 'Team' && (
     <TeamSection />
  )}
 {activeTab === 'Tasks' && (
     <UnicorniaTasksPage/>
  )}
           {activeTab === 'Marketplace' && (
     <UnicorniaMarketplace/>
  )}
           {activeTab === 'Wallet' && (
     <UnicorniaWallet/>
  )}
             {activeTab === 'Funding' && (
     <FundingDashboard/>
  )}
          
          
          
</main>
     
      </div>
    </div>
  );
}
