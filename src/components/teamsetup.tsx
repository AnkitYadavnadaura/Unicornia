"use client";

import React, { useMemo, useState } from "react";
import {
  Search,
  Users,
  Plus,
  MessageSquare,
  CalendarDays,
  IndianRupee,
  Briefcase,
  Star,
  Sparkles,
  X,
  ShieldCheck,
  Clock3,
  CheckCircle2,
  MoreHorizontal,
  Target,
  Activity,
  BadgeCheck,
  Mail,
  Phone,
  ArrowUpRight,
  Pencil,
  Wallet,
  Crown,
} from "lucide-react";

type TaskStatus = "Pending" | "In Progress" | "Completed";
type Priority = "Low" | "Medium" | "High";

type Task = {
  id: number;
  title: string;
  status: TaskStatus;
  priority: Priority;
  due: string;
};

type TeamMember = {
  id: number;
  name: string;
  role: string;
  department: string;
  salary: number;
  status: "Online" | "Busy" | "Away";
  performance: number;
  avatar: string;
  email: string;
  phone: string;
  tasks: Task[];
};

const initialMembers: TeamMember[] = [
  {
    id: 1,
    name: "Ankit Yadav",
    role: "Founder & CEO",
    department: "Leadership",
    salary: 180000,
    status: "Online",
    performance: 96,
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400",
    email: "ankit@unicornia.com",
    phone: "+91 99999 11111",
    tasks: [
      {
        id: 11,
        title: "Founder roadmap finalization",
        status: "In Progress",
        priority: "High",
        due: "Today",
      },
      {
        id: 12,
        title: "Investor pitch refinement",
        status: "Pending",
        priority: "High",
        due: "Tomorrow",
      },
    ],
  },
  {
    id: 2,
    name: "Sophia Chen",
    role: "UI/UX Designer",
    department: "Design",
    salary: 95000,
    status: "Busy",
    performance: 89,
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400",
    email: "sophia@unicornia.com",
    phone: "+91 99999 22222",
    tasks: [
      {
        id: 21,
        title: "Dashboard visual system",
        status: "Completed",
        priority: "Medium",
        due: "Yesterday",
      },
      {
        id: 22,
        title: "Team page interactions",
        status: "In Progress",
        priority: "High",
        due: "This Week",
      },
    ],
  },
  {
    id: 3,
    name: "Arjun Verma",
    role: "AI Engineer",
    department: "Engineering",
    salary: 150000,
    status: "Online",
    performance: 98,
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400",
    email: "arjun@unicornia.com",
    phone: "+91 99999 33333",
    tasks: [
      {
        id: 31,
        title: "Task assignment automation",
        status: "In Progress",
        priority: "High",
        due: "Today",
      },
      {
        id: 32,
        title: "Team analytics model",
        status: "Pending",
        priority: "Medium",
        due: "Friday",
      },
    ],
  },
  {
    id: 4,
    name: "Elena Brooks",
    role: "Community Manager",
    department: "Growth",
    salary: 88000,
    status: "Away",
    performance: 84,
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400",
    email: "elena@unicornia.com",
    phone: "+91 99999 44444",
    tasks: [
      {
        id: 41,
        title: "Launch campaign support",
        status: "In Progress",
        priority: "Medium",
        due: "Monday",
      },
      {
        id: 42,
        title: "Community update post",
        status: "Pending",
        priority: "Low",
        due: "Sunday",
      },
    ],
  },
];

const departments = ["All", "Leadership", "Design", "Engineering", "Growth"];

export default function TeamSection() {
  const [members, setMembers] = useState<TeamMember[]>(initialMembers);
  const [query, setQuery] = useState("");
  const [department, setDepartment] = useState("All");
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const filteredMembers = useMemo(() => {
    return members.filter((m) => {
      const matchesQuery =
        m.name.toLowerCase().includes(query.toLowerCase()) ||
        m.role.toLowerCase().includes(query.toLowerCase()) ||
        m.department.toLowerCase().includes(query.toLowerCase());

      const matchesDept =
        department === "All" ? true : m.department === department;

      return matchesQuery && matchesDept;
    });
  }, [members, query, department]);

  const totalSalary = useMemo(
    () => members.reduce((sum, m) => sum + m.salary, 0),
    [members]
  );

  const totalTasks = useMemo(
    () => members.reduce((sum, m) => sum + m.tasks.length, 0),
    [members]
  );

  const completedTasks = useMemo(
    () =>
      members.reduce(
        (sum, m) => sum + m.tasks.filter((t) => t.status === "Completed").length,
        0
      ),
    [members]
  );

  const addTaskToMember = (memberId: number) => {
    const title = prompt("Enter new task title");
    if (!title) return;

    setMembers((prev) =>
      prev.map((member) =>
        member.id === memberId
          ? {
              ...member,
              tasks: [
                {
                  id: Date.now(),
                  title,
                  status: "Pending",
                  priority: "Medium",
                  due: "Soon",
                },
                ...member.tasks,
              ],
            }
          : member
      )
    );

    setSelectedMember((prev) =>
      prev && prev.id === memberId
        ? {
            ...prev,
            tasks: [
              {
                id: Date.now(),
                title,
                status: "Pending",
                priority: "Medium",
                due: "Soon",
              },
              ...prev.tasks,
            ],
          }
        : prev
    );
  };

  const changeRole = (memberId: number) => {
    const role = prompt("Enter new role");
    if (!role) return;

    setMembers((prev) =>
      prev.map((member) => (member.id === memberId ? { ...member, role } : member))
    );

    setSelectedMember((prev) =>
      prev && prev.id === memberId ? { ...prev, role } : prev
    );
  };

  const changeSalary = (memberId: number) => {
    const salaryStr = prompt("Enter new salary");
    const salary = Number(salaryStr);
    if (!salary || Number.isNaN(salary)) return;

    setMembers((prev) =>
      prev.map((member) =>
        member.id === memberId ? { ...member, salary } : member
      )
    );

    setSelectedMember((prev) =>
      prev && prev.id === memberId ? { ...prev, salary } : prev
    );
  };

  return (
    <section className="px-6 md:px-8 pb-10">
      {/* Top heading */}
      <div className="mb-6 rounded-[28px] bg-[#090c1a] border border-white/10 p-6 md:p-8 shadow-2xl shadow-black/20">
        <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-white/70">
              <Sparkles size={14} className="text-pink-400" />
              Team Management
            </div>

            <h2 className="text-3xl md:text-4xl font-black mt-4">
              Manage startup team, roles, salaries, tasks
            </h2>

            <p className="text-white/50 mt-3 max-w-2xl">
              Click any member card to open a full overlay with task assignment,
              salary management, role editing, contact info, and performance
              insights.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              {
                label: "Members",
                value: members.length,
                icon: Users,
              },
              {
                label: "Tasks",
                value: totalTasks,
                icon: CheckCircle2,
              },
              {
                label: "Completed",
                value: completedTasks,
                icon: Target,
              },
              {
                label: "Payroll",
                value: `₹${Math.round(totalSalary / 1000)}K`,
                icon: IndianRupee,
              },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-3xl border border-white/10 bg-white/5 px-4 py-4"
              >
                <item.icon size={16} className="text-pink-400" />
                <div className="text-2xl font-black mt-3">{item.value}</div>
                <div className="text-xs text-white/45 mt-1">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Search and filters */}
      <div className="mb-6 rounded-[28px] bg-white border border-black/5 p-4 md:p-5 shadow-lg">
        <div className="flex flex-col lg:flex-row gap-4 lg:items-center">
          <div className="flex-1 relative">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              size={18}
            />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search members, roles, departments..."
              className="w-full pl-11 pr-4 py-4 rounded-2xl bg-slate-50 border border-slate-200 outline-none text-slate-800 placeholder:text-slate-400"
            />
          </div>

          <div className="flex flex-wrap gap-3">
            {departments.map((item) => (
              <button
                key={item}
                onClick={() => setDepartment(item)}
                className={`px-4 py-3 rounded-2xl text-sm font-medium transition ${
                  department === item
                    ? "bg-black text-white shadow-lg"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Team cards */}
      <div className="grid xl:grid-cols-2 gap-6">
        {filteredMembers.map((member) => (
          <button
            key={member.id}
            onClick={() => setSelectedMember(member)}
            className="text-left group rounded-[30px] bg-white border border-black/5 p-5 md:p-6 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition overflow-hidden"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-16 h-16 md:w-18 md:h-18 rounded-3xl object-cover border border-slate-200"
                  />
                  <div
                    className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white ${
                      member.status === "Online"
                        ? "bg-emerald-500"
                        : member.status === "Busy"
                        ? "bg-amber-500"
                        : "bg-slate-400"
                    }`}
                  />
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-black text-slate-900">
                      {member.name}
                    </h3>
                    {member.department === "Leadership" && (
                      <Crown size={16} className="text-amber-500" />
                    )}
                  </div>
                  <p className="text-slate-500">{member.role}</p>
                  <p className="text-sm text-slate-400 mt-1">
                    {member.department} • {member.status}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 rounded-full px-3 py-2 bg-emerald-50 text-emerald-700 text-sm font-semibold">
                <Star size={14} />
                {member.performance}% match
              </div>
            </div>

            <div className="mt-5 grid grid-cols-3 gap-3">
              <div className="rounded-2xl bg-slate-50 p-4 border border-slate-100">
                <div className="flex items-center gap-2 text-slate-400 text-xs">
                  <Briefcase size={14} />
                  Role
                </div>
                <div className="mt-2 font-semibold text-slate-900 text-sm">
                  {member.role}
                </div>
              </div>

              <div className="rounded-2xl bg-slate-50 p-4 border border-slate-100">
                <div className="flex items-center gap-2 text-slate-400 text-xs">
                  <Wallet size={14} />
                  Salary
                </div>
                <div className="mt-2 font-semibold text-slate-900 text-sm">
                  ₹{member.salary.toLocaleString()}
                </div>
              </div>

              <div className="rounded-2xl bg-slate-50 p-4 border border-slate-100">
                <div className="flex items-center gap-2 text-slate-400 text-xs">
                  <Activity size={14} />
                  Tasks
                </div>
                <div className="mt-2 font-semibold text-slate-900 text-sm">
                  {member.tasks.length}
                </div>
              </div>
            </div>

            <div className="mt-5">
              <div className="flex justify-between text-xs text-slate-400 mb-2">
                <span>Performance</span>
                <span>{member.performance}%</span>
              </div>
              <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-500"
                  style={{ width: `${member.performance}%` }}
                />
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {member.tasks.slice(0, 3).map((task) => (
                <span
                  key={task.id}
                  className={`px-3 py-2 rounded-xl text-xs border ${
                    task.status === "Completed"
                      ? "bg-emerald-50 text-emerald-700 border-emerald-100"
                      : task.status === "In Progress"
                      ? "bg-amber-50 text-amber-700 border-amber-100"
                      : "bg-slate-50 text-slate-700 border-slate-100"
                  }`}
                >
                  {task.title}
                </span>
              ))}
            </div>

            <div className="mt-5 flex items-center justify-between">
              <div className="flex items-center gap-2 text-slate-500 text-sm">
                <MessageSquare size={15} />
                Open profile
              </div>
              <ArrowUpRight size={18} className="text-slate-400 group-hover:text-slate-900 transition" />
            </div>
          </button>
        ))}
      </div>

      {filteredMembers.length === 0 && (
        <div className="mt-8 rounded-[28px] border border-dashed border-slate-300 bg-white p-10 text-center text-slate-500">
          No team members found.
        </div>
      )}

      {/* Overlay */}
      {selectedMember && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xl flex items-center justify-center p-4 md:p-6">
          <div className="w-full max-w-6xl max-h-[92vh] overflow-auto rounded-[34px] bg-[#0a0d19] border border-white/10 shadow-2xl">
            <div className="sticky top-0 z-10 flex items-center justify-between p-5 md:p-6 border-b border-white/10 bg-[#0a0d19]/95 backdrop-blur">
              <div className="flex items-center gap-4">
                <img
                  src={selectedMember.avatar}
                  alt={selectedMember.name}
                  className="w-16 h-16 md:w-20 md:h-20 rounded-3xl object-cover border border-white/10"
                />
                <div>
                  <h3 className="text-2xl md:text-3xl font-black text-white">
                    {selectedMember.name}
                  </h3>
                  <p className="text-white/50">{selectedMember.role}</p>
                </div>
              </div>

              <button
                onClick={() => setSelectedMember(null)}
                className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition"
              >
                <X size={18} />
              </button>
            </div>

            <div className="grid lg:grid-cols-[360px_1fr] gap-6 p-5 md:p-6">
              {/* Left column */}
              <div className="space-y-6">
                <div className="rounded-[28px] bg-white/5 border border-white/10 p-5 md:p-6">
                  <div className="flex items-center gap-2 text-white/70">
                    <BadgeCheck size={18} className="text-cyan-400" />
                    <h4 className="font-bold">Profile Overview</h4>
                  </div>

                  <div className="mt-5 space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-white/45">Department</span>
                      <span className="font-semibold text-white">
                        {selectedMember.department}
                      </span>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-white/45">Status</span>
                      <span
                        className={`font-semibold ${
                          selectedMember.status === "Online"
                            ? "text-emerald-400"
                            : selectedMember.status === "Busy"
                            ? "text-amber-400"
                            : "text-slate-300"
                        }`}
                      >
                        {selectedMember.status}
                      </span>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-white/45">Salary</span>
                      <span className="font-semibold text-white">
                        ₹{selectedMember.salary.toLocaleString()}
                      </span>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-white/45">Performance</span>
                      <span className="font-semibold text-white">
                        {selectedMember.performance}%
                      </span>
                    </div>
                  </div>
                </div>

                <div className="rounded-[28px] bg-gradient-to-br from-fuchsia-500/10 via-violet-500/10 to-cyan-500/10 border border-white/10 p-5 md:p-6">
                  <div className="flex items-center gap-2 text-white/80">
                    <ShieldCheck size={18} className="text-cyan-400" />
                    <h4 className="font-bold">AI Insight</h4>
                  </div>
                  <p className="mt-4 text-white/70 leading-relaxed text-sm">
                    This member performs best with clear priorities, short
                    feedback loops, and deadline-driven execution. The system
                    recommends assigning high-impact tasks first.
                  </p>
                </div>

                <div className="rounded-[28px] bg-white/5 border border-white/10 p-5 md:p-6">
                  <div className="flex items-center gap-2 text-white/80">
                    <Mail size={18} className="text-pink-400" />
                    <h4 className="font-bold">Quick Contact</h4>
                  </div>

                  <div className="mt-4 space-y-3 text-sm text-white/65">
                    <div className="flex items-center gap-3">
                      <Mail size={15} />
                      {selectedMember.email}
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone size={15} />
                      {selectedMember.phone}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mt-5">
                    <button className="px-4 py-3 rounded-2xl bg-white text-slate-900 font-semibold hover:opacity-90 transition">
                      Message
                    </button>
                    <button className="px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 transition">
                      Schedule
                    </button>
                  </div>
                </div>
              </div>

              {/* Right column */}
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <h4 className="text-2xl md:text-3xl font-black text-white">
                    Task Assignment
                  </h4>

                  <div className="flex flex-wrap gap-3">
                    <button
                      onClick={() => addTaskToMember(selectedMember.id)}
                      className="px-4 py-3 rounded-2xl bg-gradient-to-r from-fuchsia-500 to-violet-600 text-white font-semibold flex items-center gap-2"
                    >
                      <Plus size={16} />
                      Assign Task
                    </button>

                    <button
                      onClick={() => changeRole(selectedMember.id)}
                      className="px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white font-semibold flex items-center gap-2"
                    >
                      <Briefcase size={16} />
                      Edit Role
                    </button>

                    <button
                      onClick={() => changeSalary(selectedMember.id)}
                      className="px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white font-semibold flex items-center gap-2"
                    >
                      <IndianRupee size={16} />
                      Salary
                    </button>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    { label: "Tasks", value: selectedMember.tasks.length, icon: CheckCircle2 },
                    { label: "Online Rank", value: "#01", icon: Crown },
                    { label: "Focus Score", value: "A+", icon: Target },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="rounded-[24px] bg-white/5 border border-white/10 p-5"
                    >
                      <item.icon size={18} className="text-pink-400" />
                      <div className="mt-4 text-2xl font-black text-white">
                        {item.value}
                      </div>
                      <div className="mt-1 text-sm text-white/45">
                        {item.label}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-4">
                  {selectedMember.tasks.map((task) => (
                    <div
                      key={task.id}
                      className="rounded-[26px] bg-white/5 border border-white/10 p-5 hover:bg-white/10 transition"
                    >
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div>
                          <div className="flex items-center gap-3">
                            <h5 className="text-lg font-semibold text-white">
                              {task.title}
                            </h5>

                            <span
                              className={`text-xs px-3 py-1 rounded-full border ${
                                task.priority === "High"
                                  ? "bg-rose-500/15 text-rose-300 border-rose-500/20"
                                  : task.priority === "Medium"
                                  ? "bg-amber-500/15 text-amber-300 border-amber-500/20"
                                  : "bg-slate-500/15 text-slate-300 border-slate-500/20"
                              }`}
                            >
                              {task.priority}
                            </span>
                          </div>

                          <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-white/45">
                            <span className="flex items-center gap-2">
                              <Clock3 size={14} />
                              {task.due}
                            </span>
                            <span className="flex items-center gap-2">
                              <CalendarDays size={14} />
                              Sprint Board
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <span
                            className={`px-4 py-2 rounded-2xl text-sm font-medium ${
                              task.status === "Completed"
                                ? "bg-emerald-500/15 text-emerald-300"
                                : task.status === "In Progress"
                                ? "bg-amber-500/15 text-amber-300"
                                : "bg-white/10 text-white/70"
                            }`}
                          >
                            {task.status}
                          </span>
                          <button className="w-11 h-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white">
                            <Pencil size={15} />
                          </button>
                          <button className="w-11 h-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white">
                            <MoreHorizontal size={15} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="rounded-[28px] bg-white/5 border border-white/10 p-5 md:p-6">
                  <div className="flex items-center gap-2 text-white/80">
                    <Users size={18} className="text-cyan-400" />
                    <h4 className="font-bold">Collaboration Snapshot</h4>
                  </div>

                  <p className="mt-3 text-sm text-white/55 leading-relaxed">
                    Shows who this member works with most, current workload,
                    and the best next task assignment based on performance and
                    role.
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {members
                      .filter((m) => m.id !== selectedMember.id)
                      .slice(0, 4)
                      .map((m) => (
                        <div
                          key={m.id}
                          className="flex items-center gap-2 px-3 py-2 rounded-full bg-black/20 border border-white/10"
                        >
                          <img
                            src={m.avatar}
                            alt={m.name}
                            className="w-6 h-6 rounded-full object-cover"
                          />
                          <span className="text-sm text-white/70">{m.name}</span>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
