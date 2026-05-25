"use client";

import React, { useMemo, useState } from "react";
import {
  Search,
  Plus,
  Clock3,
  Sparkles,
  CheckCircle2,
  Circle,
  AlertTriangle,
  MoreHorizontal,
  Users,
  ArrowUpRight,
  Filter,
  Activity,
  Brain,
  Target,
  TimerReset,
  MessageSquare,
  Flag,
  X,
  Pencil,
  Trash2,
  KanbanSquare,
} from "lucide-react";

type TaskStatus =
  | "Backlog"
  | "Todo"
  | "In Progress"
  | "Review"
  | "Completed";

type Priority = "Low" | "Medium" | "High";

type Task = {
  id: number;
  title: string;
  description: string;
  status: TaskStatus;
  priority: Priority;
  due: string;
  assignee: string;
  avatar: string;
  progress: number;
};

const initialTasks: Task[] = [
  {
    id: 1,
    title: "Startup onboarding workflow",
    description:
      "Create onboarding automation flow for new startups joining Unicornia.",
    status: "In Progress",
    priority: "High",
    due: "Today",
    assignee: "Ankit Yadav",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400",
    progress: 72,
  },
  {
    id: 2,
    title: "AI task recommendation engine",
    description:
      "Develop AI based system for smart task assignment to team members.",
    status: "Todo",
    priority: "High",
    due: "Tomorrow",
    assignee: "Arjun Verma",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400",
    progress: 22,
  },
  {
    id: 3,
    title: "Team dashboard redesign",
    description:
      "Improve UI/UX for startup management and team productivity section.",
    status: "Review",
    priority: "Medium",
    due: "Friday",
    assignee: "Sophia Chen",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400",
    progress: 88,
  },
  {
    id: 4,
    title: "Investor analytics panel",
    description:
      "Create realtime funding and growth analytics for startups.",
    status: "Completed",
    priority: "Medium",
    due: "Completed",
    assignee: "Elena Brooks",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400",
    progress: 100,
  },
];

const statuses: TaskStatus[] = [
  "Backlog",
  "Todo",
  "In Progress",
  "Review",
  "Completed",
];

export default function UnicorniaTasksPage() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [search, setSearch] = useState("");
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

  const filteredTasks = useMemo(() => {
    return tasks.filter(
      (task) =>
        task.title.toLowerCase().includes(search.toLowerCase()) ||
        task.assignee.toLowerCase().includes(search.toLowerCase())
    );
  }, [tasks, search]);

  const totalTasks = tasks.length;

  const completedTasks = tasks.filter(
    (task) => task.status === "Completed"
  ).length;

  const activeTasks = tasks.filter(
    (task) => task.status === "In Progress"
  ).length;

  const highPriorityTasks = tasks.filter(
    (task) => task.priority === "High"
  ).length;

  const addTask = () => {
    const title = prompt("Enter task title");

    if (!title) return;

    const newTask: Task = {
      id: Date.now(),
      title,
      description: "New startup task created.",
      status: "Todo",
      priority: "Medium",
      due: "Next Week",
      assignee: "Unassigned",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400",
      progress: 10,
    };

    setTasks([newTask, ...tasks]);
  };

  const updateStatus = (taskId: number, status: TaskStatus) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === taskId ? { ...task, status } : task
      )
    );
  };

  return (
    <div className="min-h-screen bg-[#f4f5f9] p-6 md:p-8">
      {/* Hero */}
      <div className="rounded-[36px] bg-[#090c1a] border border-white/10 overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(236,72,153,0.2),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.2),transparent_35%)]" />

        <div className="relative z-10 p-8 md:p-10 flex flex-col xl:flex-row justify-between gap-8">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-white/70">
              <Sparkles size={14} className="text-pink-400" />
              Unicornia Task Management
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-white mt-5 leading-tight">
              Startup Task
              <span className="bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
                {" "}
                Control Center
              </span>
            </h1>

            <p className="text-white/50 max-w-2xl mt-5 text-lg leading-relaxed">
              Manage tasks, assign work, track progress, collaborate with
              teams, monitor sprint activity, and automate startup execution.
            </p>
          </div>

          {/* AI panel */}
          <div className="w-full xl:w-[360px] rounded-[30px] bg-white/5 border border-white/10 p-6 backdrop-blur-2xl">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/50 text-sm">AI Productivity</p>
                <h3 className="text-white text-3xl font-black mt-2">
                  94%
                </h3>
              </div>

              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-fuchsia-500 to-violet-600 flex items-center justify-center">
                <Brain className="text-white" />
              </div>
            </div>

            <div className="mt-6 space-y-4">
              {[
                {
                  icon: Target,
                  title: "Sprint Efficiency",
                  value: "+32%",
                },
                {
                  icon: TimerReset,
                  title: "Task Speed",
                  value: "2.3x",
                },
                {
                  icon: Activity,
                  title: "Realtime Tracking",
                  value: "Active",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10"
                >
                  <div className="flex items-center gap-3">
                    <item.icon
                      size={18}
                      className="text-cyan-400"
                    />
                    <span className="text-white/70 text-sm">
                      {item.title}
                    </span>
                  </div>

                  <span className="text-white font-semibold">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Search + Filters */}
      <div className="mt-8 rounded-[30px] bg-white border border-black/5 p-5 shadow-lg">
        <div className="flex flex-col xl:flex-row gap-5 xl:items-center justify-between">
          <div className="relative flex-1">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search tasks, assignees..."
              className="w-full pl-11 pr-4 py-4 rounded-2xl border border-slate-200 bg-slate-50 outline-none"
            />
          </div>

          <div className="flex flex-wrap gap-3">
            <button className="px-5 py-3 rounded-2xl bg-black text-white font-medium flex items-center gap-2">
              <Filter size={16} />
              All Tasks
            </button>

            <button
              onClick={addTask}
              className="px-5 py-3 rounded-2xl bg-gradient-to-r from-fuchsia-500 to-violet-600 text-white font-semibold flex items-center gap-2"
            >
              <Plus size={16} />
              Create Task
            </button>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5 mt-8">
        {[
          {
            title: "Total Tasks",
            value: totalTasks,
            icon: KanbanSquare,
          },
          {
            title: "Completed",
            value: completedTasks,
            icon: CheckCircle2,
          },
          {
            title: "In Progress",
            value: activeTasks,
            icon: Clock3,
          },
          {
            title: "High Priority",
            value: highPriorityTasks,
            icon: AlertTriangle,
          },
        ].map((item, i) => (
          <div
            key={i}
            className="rounded-[28px] bg-white border border-black/5 p-6 shadow-lg"
          >
            <item.icon
              className="text-fuchsia-500"
              size={22}
            />

            <div className="mt-5 text-4xl font-black text-slate-900">
              {item.value}
            </div>

            <div className="mt-2 text-slate-500">
              {item.title}
            </div>
          </div>
        ))}
      </div>

{/* =========================
   HORIZONTAL PROFESSIONAL TASK ROWS
========================= */}

<div className="mt-8 space-y-5">
  {filteredTasks.map((task) => (
    <button
      key={task.id}
      onClick={() => setSelectedTask(task)}
      className="group w-full rounded-[32px] border border-white/10 bg-[#0b1020] overflow-hidden hover:border-fuchsia-500/30 hover:shadow-[0_20px_60px_rgba(168,85,247,0.18)] transition-all duration-300"
    >
      <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-6 p-6">
        {/* LEFT */}
        <div className="flex items-start gap-5 flex-1">
          {/* Status line */}
          <div
            className={`w-2 self-stretch rounded-full ${
              task.status === "Completed"
                ? "bg-emerald-400"
                : task.status === "In Progress"
                ? "bg-cyan-400"
                : task.status === "Review"
                ? "bg-amber-400"
                : task.status === "Todo"
                ? "bg-violet-400"
                : "bg-slate-500"
            }`}
          />

          {/* Main Content */}
          <div className="flex-1">
            {/* Tags */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <div
                className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  task.priority === "High"
                    ? "bg-rose-500/15 text-rose-300 border border-rose-500/20"
                    : task.priority === "Medium"
                    ? "bg-amber-500/15 text-amber-300 border border-amber-500/20"
                    : "bg-slate-500/15 text-slate-300 border border-slate-500/20"
                }`}
              >
                {task.priority}
              </div>

              <div className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-white/60">
                {task.status}
              </div>

              <div className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-white/60">
                {task.due}
              </div>
            </div>

            {/* Title */}
            <div className="flex items-center gap-3">
              <h3 className="text-2xl font-black text-white">
                {task.title}
              </h3>

              <ArrowUpRight
                size={18}
                className="text-fuchsia-400 opacity-0 group-hover:opacity-100 transition"
              />
            </div>

            {/* Description */}
            <p className="text-white/45 leading-relaxed mt-3 max-w-3xl">
              {task.description}
            </p>

            {/* Bottom */}
            <div className="mt-6 flex flex-wrap items-center gap-6">
              {/* Assignee */}
              <div className="flex items-center gap-3">
                <div className="relative">
                  <img
                    src={task.avatar}
                    alt={task.assignee}
                    className="w-12 h-12 rounded-2xl object-cover border border-white/10"
                  />

                  <div className="absolute -bottom-1 -right-1 w-3 h-3 rounded-full bg-emerald-400 border-2 border-[#0b1020]" />
                </div>

                <div>
                  <p className="text-white font-semibold text-sm">
                    {task.assignee}
                  </p>

                  <p className="text-white/35 text-xs">
                    Assigned Member
                  </p>
                </div>
              </div>

              {/* Progress */}
              <div className="flex-1 min-w-[250px]">
                <div className="flex justify-between text-xs text-white/35 mb-2">
                  <span>Progress</span>
                  <span>{task.progress}%</span>
                </div>

                <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400"
                    style={{
                      width: `${task.progress}%`,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-3">
          <button className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition">
            <MessageSquare
              size={16}
              className="text-white/60"
            />
          </button>

          <button className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition">
            <Users
              size={16}
              className="text-white/60"
            />
          </button>

          <button className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition">
            <MoreHorizontal
              size={16}
              className="text-white/60"
            />
          </button>
        </div>
      </div>

      {/* AI Footer */}
      <div className="border-t border-white/5 px-6 py-4 bg-gradient-to-r from-fuchsia-500/5 via-violet-500/5 to-cyan-500/5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-sm text-white/70">
            <Sparkles
              size={14}
              className="text-cyan-400"
            />
            AI predicts this task will finish 32% faster with 1 more collaborator
          </div>

          <div className="flex items-center gap-5 text-xs text-white/35">
            <span>Updated 2h ago</span>
            <span>Sprint 04</span>
            <span>Unicornia AI Workflow</span>
          </div>
        </div>
      </div>
    </button>
  ))}
</div>
      {/* Overlay */}
      {selectedTask && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xl flex items-center justify-center p-4 md:p-6">
          <div className="w-full max-w-5xl rounded-[36px] bg-[#0a0d19] border border-white/10 overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/70 text-sm">
                  <Circle size={10} />
                  {selectedTask.status}
                </div>

                <h2 className="text-3xl md:text-4xl font-black text-white mt-4">
                  {selectedTask.title}
                </h2>

                <p className="text-white/50 mt-3 max-w-2xl">
                  {selectedTask.description}
                </p>
              </div>

              <button
                onClick={() => setSelectedTask(null)}
                className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white"
              >
                <X size={18} />
              </button>
            </div>

            {/* Body */}
            <div className="grid lg:grid-cols-[360px_1fr] gap-6 p-6">
              {/* Left */}
              <div className="space-y-5">
                <div className="rounded-[28px] bg-white/5 border border-white/10 p-5">
                  <div className="flex items-center gap-3">
                    <img
                      src={selectedTask.avatar}
                      alt={selectedTask.assignee}
                      className="w-14 h-14 rounded-2xl object-cover"
                    />

                    <div>
                      <p className="text-white font-semibold">
                        {selectedTask.assignee}
                      </p>

                      <p className="text-white/45 text-sm">
                        Assigned Member
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-white/45">
                        Priority
                      </span>

                      <span className="text-white font-semibold">
                        {selectedTask.priority}
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-white/45">Due</span>

                      <span className="text-white font-semibold">
                        {selectedTask.due}
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-white/45">
                        Progress
                      </span>

                      <span className="text-white font-semibold">
                        {selectedTask.progress}%
                      </span>
                    </div>
                  </div>
                </div>

                <div className="rounded-[28px] bg-gradient-to-br from-fuchsia-500/10 via-violet-500/10 to-cyan-500/10 border border-white/10 p-5">
                  <div className="flex items-center gap-2 text-white">
                    <Brain
                      size={18}
                      className="text-cyan-400"
                    />
                    <h4 className="font-bold">
                      AI Recommendation
                    </h4>
                  </div>

                  <p className="mt-4 text-white/70 text-sm leading-relaxed">
                    AI suggests increasing collaboration and
                    splitting this task into 2 sprint milestones for
                    faster execution and improved team efficiency.
                  </p>
                </div>
              </div>

              {/* Right */}
              <div>
                <div className="flex flex-wrap gap-3">
                  {statuses.map((status) => (
                    <button
                      key={status}
                      onClick={() =>
                        updateStatus(selectedTask.id, status)
                      }
                      className={`px-4 py-3 rounded-2xl font-medium transition ${
                        selectedTask.status === status
                          ? "bg-white text-slate-900"
                          : "bg-white/5 border border-white/10 text-white"
                      }`}
                    >
                      {status}
                    </button>
                  ))}
                </div>

                {/* Timeline */}
                <div className="mt-8 rounded-[30px] bg-white/5 border border-white/10 p-6">
                  <h3 className="text-2xl font-black text-white">
                    Task Timeline
                  </h3>

                  <div className="mt-6 space-y-5">
                    {[
                      {
                        title: "Task Created",
                        time: "2 days ago",
                      },
                      {
                        title: "Assigned to team member",
                        time: "Yesterday",
                      },
                      {
                        title: "Sprint started",
                        time: "Today",
                      },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="flex gap-4"
                      >
                        <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center">
                          <CheckCircle2
                            size={16}
                            className="text-cyan-400"
                          />
                        </div>

                        <div>
                          <p className="text-white font-medium">
                            {item.title}
                          </p>

                          <p className="text-white/45 text-sm mt-1">
                            {item.time}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="grid md:grid-cols-3 gap-4 mt-6">
                  <button className="h-14 rounded-2xl bg-white/5 border border-white/10 text-white font-semibold flex items-center justify-center gap-2">
                    <Pencil size={16} />
                    Edit
                  </button>

                  <button className="h-14 rounded-2xl bg-white/5 border border-white/10 text-white font-semibold flex items-center justify-center gap-2">
                    <Flag size={16} />
                    Priority
                  </button>

                  <button className="h-14 rounded-2xl bg-rose-500/15 border border-rose-500/20 text-rose-300 font-semibold flex items-center justify-center gap-2">
                    <Trash2 size={16} />
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
