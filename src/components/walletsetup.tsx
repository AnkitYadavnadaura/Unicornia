"use client";

import React, { useMemo, useState } from "react";
import {
  Wallet,
  IndianRupee,
  ArrowUpRight,
  ArrowDownLeft,
  Sparkles,
  Users,
  ShieldCheck,
  CheckCircle2,
  Clock3,
  Search,
  Bell,
  MoreHorizontal,
  Building2,
  CreditCard,
  Landmark,
  Receipt,
  Plus,
  XCircle,
  TrendingUp,
} from "lucide-react";

type PaymentStatus =
  | "Approved"
  | "Pending"
  | "Rejected";

type Transaction = {
  id: number;
  name: string;
  role: string;
  amount: string;
  type: string;
  status: PaymentStatus;
  department: string;
  date: string;
  avatar: string;
};

const transactions: Transaction[] = [
  {
    id: 1,
    name: "Aarav Sharma",
    role: "Frontend Developer",
    amount: "₹85,000",
    type: "Salary",
    status: "Approved",
    department: "Engineering",
    date: "Today",
    avatar:
      "https://i.pravatar.cc/150?img=12",
  },
  {
    id: 2,
    name: "Priya Mehta",
    role: "UI/UX Designer",
    amount: "₹62,000",
    type: "Bonus",
    status: "Pending",
    department: "Design",
    date: "Today",
    avatar:
      "https://i.pravatar.cc/150?img=32",
  },
  {
    id: 3,
    name: "Rahul Verma",
    role: "AI Engineer",
    amount: "₹1,20,000",
    type: "Salary",
    status: "Approved",
    department: "AI Team",
    date: "Yesterday",
    avatar:
      "https://i.pravatar.cc/150?img=14",
  },
  {
    id: 4,
    name: "Ananya Singh",
    role: "Marketing Head",
    amount: "₹40,000",
    type: "Reimbursement",
    status: "Rejected",
    department: "Marketing",
    date: "2 days ago",
    avatar:
      "https://i.pravatar.cc/150?img=24",
  },
];

export default function UnicorniaWallet() {
  const [search, setSearch] = useState("");
  const [selectedStatus, setSelectedStatus] =
    useState<PaymentStatus | "All">("All");

  const filteredTransactions = useMemo(() => {
    return transactions.filter((item) => {
      const matchesSearch =
        item.name
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        item.role
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesStatus =
        selectedStatus === "All"
          ? true
          : item.status === selectedStatus;

      return matchesSearch && matchesStatus;
    });
  }, [search, selectedStatus]);

  return (
    <div className="min-h-screen bg-[#f5f7fb] text-[#0f172a] p-6">
      {/* ================= HEADER ================= */}
      <div className="rounded-[36px] bg-white border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-8 md:p-10">
          <div className="flex flex-col xl:flex-row justify-between gap-10">
            {/* LEFT */}
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-50 border border-violet-100 text-sm text-violet-700">
                <Sparkles size={14} />
                Unicornia Finance Hub
              </div>

              <h1 className="text-5xl md:text-6xl font-black mt-6 leading-tight">
                Startup Wallet &
                <span className="bg-gradient-to-r from-violet-600 to-cyan-500 bg-clip-text text-transparent">
                  {" "}
                  Fund Control
                </span>
              </h1>

              <p className="text-slate-500 text-lg mt-6 max-w-2xl leading-relaxed">
                Manage startup salaries, approvals, treasury,
                reimbursements, payroll, investments and
                financial operations from one dashboard.
              </p>

              {/* Actions */}
              <div className="flex flex-wrap gap-4 mt-8">
                <button className="h-14 px-6 rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold shadow-lg shadow-violet-200 flex items-center gap-2">
                  <Plus size={18} />
                  New Payment
                </button>

                <button className="h-14 px-6 rounded-2xl bg-slate-100 border border-slate-200 text-slate-700 font-medium hover:bg-slate-200 transition">
                  Treasury Report
                </button>
              </div>
            </div>

            {/* RIGHT WALLET CARD */}
            <div className="w-full xl:w-[420px] rounded-[32px] bg-gradient-to-br from-violet-600 to-indigo-700 p-7 text-white shadow-2xl">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white/70 text-sm">
                    Startup Treasury
                  </p>

                  <h2 className="text-5xl font-black mt-3">
                    ₹48.2L
                  </h2>
                </div>

                <div className="w-16 h-16 rounded-3xl bg-white/15 flex items-center justify-center backdrop-blur-xl">
                  <Wallet size={28} />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-8">
                {[
                  {
                    icon: ArrowUpRight,
                    label: "Incoming",
                    value: "₹12.4L",
                  },
                  {
                    icon: ArrowDownLeft,
                    label: "Outgoing",
                    value: "₹4.1L",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="rounded-2xl bg-white/10 border border-white/10 p-4"
                  >
                    <div className="flex items-center gap-2 text-white/70 text-sm">
                      <item.icon size={16} />
                      {item.label}
                    </div>

                    <h3 className="text-2xl font-bold mt-3">
                      {item.value}
                    </h3>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl bg-white/10 border border-white/10 p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white/70 text-sm">
                      Runway
                    </p>

                    <h4 className="text-2xl font-bold mt-2">
                      18 Months
                    </h4>
                  </div>

                  <TrendingUp />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= STATS ================= */}
      <div className="grid xl:grid-cols-4 gap-5 mt-8">
        {[
          {
            icon: Users,
            title: "Payroll",
            value: "₹8.4L",
            desc: "Monthly salary expense",
          },
          {
            icon: ShieldCheck,
            title: "Pending Approvals",
            value: "12",
            desc: "Need founder approval",
          },
          {
            icon: Landmark,
            title: "Treasury",
            value: "₹48.2L",
            desc: "Available startup funds",
          },
          {
            icon: Receipt,
            title: "Invoices",
            value: "84",
            desc: "Paid this month",
          },
        ].map((card, i) => (
          <div
            key={i}
            className="rounded-[28px] bg-white border border-slate-200 p-6 shadow-sm hover:shadow-md transition"
          >
            <div className="w-14 h-14 rounded-2xl bg-violet-50 text-violet-600 flex items-center justify-center">
              <card.icon size={24} />
            </div>

            <h3 className="text-4xl font-black mt-6">
              {card.value}
            </h3>

            <p className="font-semibold mt-2">
              {card.title}
            </p>

            <p className="text-slate-500 text-sm mt-2">
              {card.desc}
            </p>
          </div>
        ))}
      </div>

      {/* ================= FILTER BAR ================= */}
      <div className="mt-8 rounded-[30px] bg-white border border-slate-200 p-5 shadow-sm">
        <div className="flex flex-col xl:flex-row gap-5 xl:items-center justify-between">
          {/* SEARCH */}
          <div className="relative flex-1">
            <Search
              size={18}
              className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              placeholder="Search employees..."
              className="w-full h-16 rounded-2xl bg-slate-50 border border-slate-200 pl-14 pr-5 text-slate-700 placeholder:text-slate-400 outline-none focus:border-violet-400"
            />
          </div>

          {/* STATUS */}
          <div className="flex flex-wrap gap-3">
            {[
              "All",
              "Approved",
              "Pending",
              "Rejected",
            ].map((status) => (
              <button
                key={status}
                onClick={() =>
                  setSelectedStatus(
                    status as
                      | PaymentStatus
                      | "All"
                  )
                }
                className={`px-5 py-3 rounded-2xl transition font-medium ${
                  selectedStatus === status
                    ? "bg-violet-600 text-white"
                    : "bg-slate-100 border border-slate-200 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {status}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ================= PAYMENTS ================= */}
      <div className="mt-8 space-y-5">
        {filteredTransactions.map((item) => (
          <div
            key={item.id}
            className="rounded-[32px] bg-white border border-slate-200 p-6 shadow-sm hover:shadow-md transition"
          >
            <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-6">
              {/* LEFT */}
              <div className="flex items-start gap-5 flex-1">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-20 h-20 rounded-3xl object-cover"
                />

                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <h2 className="text-2xl font-black">
                      {item.name}
                    </h2>

                    <div
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        item.status === "Approved"
                          ? "bg-emerald-50 text-emerald-600"
                          : item.status === "Pending"
                          ? "bg-amber-50 text-amber-600"
                          : "bg-rose-50 text-rose-600"
                      }`}
                    >
                      {item.status}
                    </div>
                  </div>

                  <p className="text-slate-500 mt-2">
                    {item.role} • {item.department}
                  </p>

                  <div className="flex flex-wrap items-center gap-6 mt-5">
                    <div className="flex items-center gap-2 text-slate-600">
                      <IndianRupee size={16} />
                      {item.amount}
                    </div>

                    <div className="text-slate-500">
                      {item.type}
                    </div>

                    <div className="flex items-center gap-2 text-slate-500">
                      <Clock3 size={15} />
                      {item.date}
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT */}
              <div className="flex flex-wrap gap-3">
                <button className="h-14 px-5 rounded-2xl bg-emerald-500 text-white font-semibold hover:opacity-90 transition flex items-center gap-2">
                  <CheckCircle2 size={18} />
                  Approve
                </button>

                <button className="h-14 px-5 rounded-2xl bg-rose-500 text-white font-semibold hover:opacity-90 transition flex items-center gap-2">
                  <XCircle size={18} />
                  Reject
                </button>

                <button className="h-14 px-5 rounded-2xl bg-slate-100 border border-slate-200 text-slate-700 hover:bg-slate-200 transition flex items-center gap-2">
                  <MoreHorizontal size={18} />
                  Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ================= APPROVAL WORKFLOW ================= */}
      <div className="grid xl:grid-cols-2 gap-6 mt-8">
        {/* LEFT */}
        <div className="rounded-[32px] bg-white border border-slate-200 p-7 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-black">
                Approval Workflow
              </h2>

              <p className="text-slate-500 mt-2">
                Founder & finance approvals
              </p>
            </div>

            <Bell className="text-violet-600" />
          </div>

          <div className="space-y-5 mt-8">
            {[
              "Salary > ₹1L requires founder approval",
              "Expense claims auto-reviewed by AI",
              "Treasury withdrawals need 2 approvals",
              "Investor fund movement tracking enabled",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-4 rounded-2xl bg-slate-50 border border-slate-200 p-4"
              >
                <div className="w-10 h-10 rounded-xl bg-violet-100 text-violet-600 flex items-center justify-center">
                  <ShieldCheck size={18} />
                </div>

                <span className="text-slate-700 font-medium">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="rounded-[32px] bg-white border border-slate-200 p-7 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-black">
                Startup Banking
              </h2>

              <p className="text-slate-500 mt-2">
                Connected finance systems
              </p>
            </div>

            <Building2 className="text-cyan-500" />
          </div>

          <div className="space-y-5 mt-8">
            {[
              {
                icon: CreditCard,
                title: "Corporate Cards",
                desc: "Manage team spending limits",
              },
              {
                icon: Landmark,
                title: "Investor Accounts",
                desc: "Track investment inflows",
              },
              {
                icon: Receipt,
                title: "Expense Reports",
                desc: "Auto-generated finance reports",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-2xl bg-slate-50 border border-slate-200 p-5 flex items-center gap-4"
              >
                <div className="w-14 h-14 rounded-2xl bg-cyan-50 text-cyan-600 flex items-center justify-center">
                  <item.icon size={24} />
                </div>

                <div>
                  <h3 className="font-bold text-lg">
                    {item.title}
                  </h3>

                  <p className="text-slate-500 text-sm mt-1">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
