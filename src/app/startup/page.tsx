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
  //const [selectedStartup, setSelectedStartup] = useState('NeuroVerse');
  const [walletBalance, setWalletBalance] = useState(2840000);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  //const [taskFilter, setTaskFilter] = useState('All');

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
  const startups = [
    {
      name: 'QuantumForge',
      category: 'AI Infrastructure',
      growth: '+48%',
      valuation: '$12M',
      members: 18,
      tokens: '420K',
    },
    {
      name: 'NeuroVerse',
      category: 'Neural Commerce',
      growth: '+61%',
      valuation: '$24M',
      members: 34,
      tokens: '880K',
    },
    {
      name: 'AgriNova',
      category: 'Smart Farming',
      growth: '+33%',
      valuation: '$8M',
      members: 11,
      tokens: '250K',
    },
  ];

  const team = [
    {
      name: 'Ankit Yadav',
      role: 'Founder & Vision Lead',
      progress: '92%',
    },
    {
      name: 'Riya Sharma',
      role: 'UI/UX Designer',
      progress: '74%',
    },
    {
      name: 'Aman Verma',
      role: 'Backend Engineer',
      progress: '81%',
    },
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
                <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-pink-500 via-violet-500 to-cyan-400 flex items-center justify-center shadow-2xl shadow-pink-500/40">
                  <Rocket className="w-8 h-8" />
                </div>

                {!sidebarCollapsed && (
                  <div>
                    <h1 className="text-base font-semibold tracking-tight">UNICORNIA</h1>
                    <p className="text-xs text-gray-400">Startup Civilization</p>
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
        </aside>

        {/* Main Area */}
        <main className="flex-1 bg-[#F5F7FB] text-black overflow-y-auto">
<div className="h-16 bg-white border-b border-gray-200 px-6 flex items-center justify-between sticky top-0 z-50">
<div>
<h1 className="text-lg font-semibold">Startup Management Dashboard</h1>
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
{[['Total Startups','248'],['Team Members','1482'],['Tasks','326'],['Wallet','2.8M']].map(([title,value]) => (
<div key={title} className="bg-white rounded-3xl border border-gray-200 p-6 shadow-sm">
<p className="text-gray-500 text-xs">{title}</p>
<h2 className="text-lg font-semibold mt-4">{value}</h2>
</div>
))}
</section>
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
</section>
<section className="grid grid-cols-1 xl:grid-cols-2 gap-6">
<div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
<div className="flex justify-between items-center mb-6">
<div>
<h2 className="text-lg font-semibold">Team Members</h2>
<p className="text-gray-500 text-xs">Role management</p>
</div>
<button className="px-4 py-2 rounded-xl bg-black text-white">Add</button>
</div>
<div className="space-y-4">
{team.map((member)=>(
<div key={member.name} className="flex justify-between items-center border border-gray-200 rounded-2xl p-5">
<div>
<h3 className="font-semibold">{member.name}</h3>
<p className="text-xs text-gray-500">{member.role}</p>
</div>
<button className="px-4 py-2 rounded-xl border border-gray-300">View</button>
</div>
))}
</div>
</div>
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
