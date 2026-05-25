"use client";

import React, { useMemo, useState } from "react";
import {
  Search,
  Sparkles,
  Users,
  ShoppingBag,
  Brain,
  ArrowUpRight,
  Star,
  MessageSquare,
  Bookmark,
  Filter,
  Grid3X3,
  List,
  Briefcase,
  Cpu,
  Package,
  ExternalLink,
  CheckCircle2,
  TrendingUp,
  ShieldCheck,
  Plus,
  Heart,
} from "lucide-react";

type Category =
  | "Human Resource"
  | "Community Products"
  | "APIs & AI Models";

type MarketplaceItem = {
  id: number;
  title: string;
  category: Category;
  subtitle: string;
  price: string;
  rating: number;
  users: string;
  verified: boolean;
  trending?: boolean;
  image: string;
};

const marketplaceData: MarketplaceItem[] = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    category: "Human Resource",
    subtitle: "React • Next.js • AI UI Engineer",
    price: "₹1.2L/month",
    rating: 4.9,
    users: "124 startups hired",
    verified: true,
    trending: true,
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400",
  },
  {
    id: 2,
    title: "Unicornia Growth Kit",
    category: "Community Products",
    subtitle: "Complete startup launch system",
    price: "₹4,999",
    rating: 4.8,
    users: "2.1K founders",
    verified: true,
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=400",
  },
  {
    id: 3,
    title: "Vision AI API",
    category: "APIs & AI Models",
    subtitle: "Realtime object detection API",
    price: "$0.002/request",
    rating: 4.9,
    users: "18K developers",
    verified: true,
    trending: true,
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=400",
  },
  {
    id: 4,
    title: "Startup UI Designer",
    category: "Human Resource",
    subtitle: "Premium SaaS dashboard designer",
    price: "₹85K/month",
    rating: 4.7,
    users: "92 startups hired",
    verified: true,
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400",
  },
  {
    id: 5,
    title: "AI Automation Agent",
    category: "APIs & AI Models",
    subtitle: "Workflow execution AI system",
    price: "$49/month",
    rating: 4.8,
    users: "9.2K teams",
    verified: true,
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=400",
  },
];

const categories: Category[] = [
  "Human Resource",
  "Community Products",
  "APIs & AI Models",
];

export default function UnicorniaMarketplace() {
  const [selectedCategory, setSelectedCategory] =
    useState<Category>("Human Resource");

  const [search, setSearch] = useState("");
  const [saved, setSaved] = useState<number[]>([]);
  const [layout, setLayout] = useState<"list" | "grid">("list");

  const filteredItems = useMemo(() => {
    return marketplaceData.filter(
      (item) =>
        item.category === selectedCategory &&
        item.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [selectedCategory, search]);

  const toggleSave = (id: number) => {
    setSaved((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-[#050816] text-white p-6">
      {/* HERO */}
      <div className="rounded-[40px] border border-white/10 bg-[#0b1020] overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(168,85,247,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(6,182,212,0.18),transparent_35%)]" />

        <div className="relative z-10 p-8 md:p-10">
          <div className="flex flex-col xl:flex-row justify-between gap-10">
            {/* LEFT */}
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-white/70">
                <Sparkles
                  size={14}
                  className="text-fuchsia-400"
                />
                Unicornia Marketplace
              </div>

              <h1 className="text-5xl md:text-7xl font-black mt-6 leading-tight">
                Discover Startup
                <span className="bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
                  {" "}
                  Resources
                </span>
              </h1>

              <p className="text-white/50 text-lg mt-6 max-w-2xl">
                Hire talent, buy products, use APIs & AI models
                built inside Unicornia ecosystem.
              </p>
            </div>

            {/* RIGHT PANEL */}
            <div className="w-full xl:w-[350px] rounded-[30px] bg-white/5 border border-white/10 p-6 backdrop-blur-xl">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white/40 text-sm">
                    Marketplace Activity
                  </p>

                  <h2 className="text-5xl font-black mt-2">
                    28K+
                  </h2>
                </div>

                <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-fuchsia-500 to-cyan-500 flex items-center justify-center">
                  <TrendingUp className="text-white" />
                </div>
              </div>

              <div className="mt-8 space-y-4">
                {[
                  {
                    icon: Users,
                    title: "Talent",
                    value: "12K+",
                  },
                  {
                    icon: Package,
                    title: "Products",
                    value: "4K+",
                  },
                  {
                    icon: Cpu,
                    title: "AI APIs",
                    value: "2.9K",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between rounded-2xl bg-white/5 border border-white/10 p-4"
                  >
                    <div className="flex items-center gap-3">
                      <item.icon
                        size={18}
                        className="text-cyan-400"
                      />
                      <span className="text-white/70">
                        {item.title}
                      </span>
                    </div>

                    <span className="font-semibold">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FILTER BAR */}
      <div className="mt-8 rounded-[30px] bg-[#0b1020] border border-white/10 p-5">
        <div className="flex flex-col xl:flex-row gap-5 xl:items-center justify-between">
          {/* Search */}
          <div className="relative flex-1">
            <Search
              size={18}
              className="absolute left-5 top-1/2 -translate-y-1/2 text-white/30"
            />

            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search marketplace..."
              className="w-full h-16 rounded-2xl bg-white/5 border border-white/10 pl-14 pr-5 text-white placeholder:text-white/30 outline-none focus:border-fuchsia-500/40"
            />
          </div>
          <div className="flex flex-wrap items-center gap-3 mt-5">
  {/* Filter */}
  <button className="h-12 px-5 rounded-2xl bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 transition flex items-center gap-2">
    <Filter size={16} />
    Filters
  </button>

  {/* Saved */}
  <button className="h-12 px-5 rounded-2xl bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 transition flex items-center gap-2">
    <Bookmark size={16} />
    Saved Items
  </button>

  {/* HR */}
  <button className="h-12 px-5 rounded-2xl bg-fuchsia-500/10 border border-fuchsia-500/20 text-fuchsia-300 flex items-center gap-2">
    <Briefcase size={16} />
    Hiring
  </button>

  {/* Products */}
  <button className="h-12 px-5 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 flex items-center gap-2">
    <ShoppingBag size={16} />
    Products
  </button>

  {/* AI */}
  <button className="h-12 px-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 flex items-center gap-2">
    <Brain size={16} />
    AI Models
  </button>
</div>

          {/* Categories */}
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() =>
                  setSelectedCategory(category)
                }
                className={`px-5 py-3 rounded-2xl transition font-medium ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-fuchsia-500 to-violet-600 text-white"
                    : "bg-white/5 border border-white/10 text-white/60 hover:bg-white/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Layout */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setLayout("list")}
              className={`w-14 h-14 rounded-2xl flex items-center justify-center transition ${
                layout === "list"
                  ? "bg-white text-black"
                  : "bg-white/5 border border-white/10 text-white/60"
              }`}
            >
              <List size={18} />
            </button>

            <button
              onClick={() => setLayout("grid")}
              className={`w-14 h-14 rounded-2xl flex items-center justify-center transition ${
                layout === "grid"
                  ? "bg-white text-black"
                  : "bg-white/5 border border-white/10 text-white/60"
              }`}
            >
              <Grid3X3 size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* LISTING UI */}
     <div
  className={
    layout === "grid"
      ? "mt-8 grid md:grid-cols-2 xl:grid-cols-3 gap-5"
      : "mt-8 space-y-5"
  }
>
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="group rounded-[34px] border border-white/10 bg-[#0b1020] overflow-hidden hover:border-fuchsia-500/30 hover:shadow-[0_20px_80px_rgba(168,85,247,0.18)] transition-all duration-300"
          >
            <div className="flex flex-col xl:flex-row xl:items-center gap-8 p-6">
              {/* LEFT */}
              <div className="flex items-start gap-5 flex-1">
                {/* IMAGE */}
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-28 h-28 rounded-3xl object-cover border border-white/10"
                  />

                  {item.trending && (
                    <div className="absolute -top-2 -right-2 px-3 py-1 rounded-full bg-gradient-to-r from-fuchsia-500 to-violet-600 text-xs font-semibold">
                      Trending
                    </div>
                  )}
                </div>

                {/* INFO */}
                <div className="flex-1">
                  {/* TOP TAGS */}
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-white/60">
                      {item.category}
                    </div>

                    {
  item.verified && (
    <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-300">
      <CheckCircle2 size={12} />
      Verified
    </div>
  )
}
                  </div>

                  {/* TITLE */}
                  <div className="flex items-center gap-3">
                    <h2 className="text-3xl font-black">
                      {item.title}
                    </h2>

                    <ArrowUpRight
                      size={18}
                      className="text-fuchsia-400 opacity-0 group-hover:opacity-100 transition"
                    />
                  </div>

                  {/* SUBTITLE */}
                  <p className="text-white/45 mt-3 text-lg">
                    {item.subtitle}
                  </p>

                  {/* STATS */}
                  <div className="flex flex-wrap items-center gap-6 mt-6">
                    <div className="flex items-center gap-2">
                      <Star
                        size={16}
                        className="text-amber-400"
                      />

                      <span className="text-white/80">
                        {item.rating}
                      </span>
                    </div>

                    <div className="text-white/40">
                      {item.users}
                    </div>

                    <div className="text-cyan-300 font-semibold">
                      {item.price}
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT BUTTONS */}
              <div className="flex flex-wrap xl:flex-col gap-3 xl:w-[220px]">
                <button
                  onClick={() =>
                    alert(`Opening ${item.title}`)
                  }
                  className="flex-1 h-14 rounded-2xl bg-gradient-to-r from-fuchsia-500 to-violet-600 font-semibold hover:scale-[1.02] transition"
                >
                  Open
                </button>

                <button
                  onClick={() =>
                    alert(`Contact for ${item.title}`)
                  }
                  className="flex-1 h-14 rounded-2xl bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 transition flex items-center justify-center gap-2"
                >
                  <MessageSquare size={16} />
                  Contact
                </button>

                <button
                  onClick={() =>
                    toggleSave(item.id)
                  }
                  className={`flex-1 h-14 rounded-2xl border transition flex items-center justify-center gap-2 ${
                    saved.includes(item.id)
                      ? "bg-rose-500/15 border-rose-500/20 text-rose-300"
                      : "bg-white/5 border-white/10 text-white/60 hover:bg-white/10"
                  }`}
                >
                  <Heart size={16} />
                  {saved.includes(item.id)
                    ? "Saved"
                    : "Save"}
                </button>
              </div>
            </div>

            {/* FOOTER */}
            <div className="border-t border-white/5 px-6 py-4 bg-gradient-to-r from-fuchsia-500/5 via-violet-500/5 to-cyan-500/5">
              <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-sm text-white/70">
                  <Sparkles
                    size={14}
                    className="text-cyan-400"
                  />
                  AI recommends this based on your startup profile
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <button className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 transition">
                    Details
                  </button>

                  <button className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 transition flex items-center gap-2">
                    <ExternalLink size={14} />
                    Visit
                  </button>

                  <button className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 transition flex items-center gap-2">
                    <Plus size={14} />
                    Add to Workspace
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
