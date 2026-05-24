'use client';

import { useState } from 'react';
import {
  Search,
  Rocket,
  Users,
  TrendingUp,
  Sparkles,
  Crown,
  MessageCircle,
} from 'lucide-react';

export default function StartupDiscoveryPage() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All',
    'AI',
    'FinTech',
    'SaaS',
    'Web3',
    'EdTech',
    'HealthTech',
  ];

  const startups = [
    {
      id: 1,
      name: 'NeuroVerse AI',
      tagline: 'Autonomous AI workforce platform',
      category: 'AI',
      founder: 'Ankit Yadav',
      members: 24,
      stage: 'Seed',
      growth: '+28%',
      match: '96%',
      status: 'Hiring',
      valuation: '$1.2M',
      users: '14K',
      initials: 'NV',
    },
    {
      id: 2,
      name: 'Finexa',
      tagline: 'Next generation fintech banking',
      category: 'FinTech',
      founder: 'Riya Sharma',
      members: 18,
      stage: 'Series A',
      growth: '+42%',
      match: '91%',
      status: 'Fundraising',
      valuation: '$3.8M',
      users: '48K',
      initials: 'FX',
    },
    {
      id: 3,
      name: 'EduSpark',
      tagline: 'AI powered learning ecosystem',
      category: 'EdTech',
      founder: 'Kabir Raj',
      members: 32,
      stage: 'Growth',
      growth: '+19%',
      match: '89%',
      status: 'Live',
      valuation: '$2.1M',
      users: '120K',
      initials: 'ES',
    },
    {
      id: 4,
      name: 'ChainNova',
      tagline: 'Web3 startup infrastructure layer',
      category: 'Web3',
      founder: 'Aman Verma',
      members: 14,
      stage: 'Seed',
      growth: '+36%',
      match: '94%',
      status: 'Hiring',
      valuation: '$980K',
      users: '9K',
      initials: 'CN',
    },
  ];

  const filteredStartups = startups.filter((startup) => {
    const matchesSearch =
      startup.name.toLowerCase().includes(search.toLowerCase()) ||
      startup.tagline.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      selectedCategory === 'All' ||
      startup.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-[#F5F7FB] p-8">

      {/* Hero */}
      <div className="relative overflow-hidden rounded-[36px] bg-gradient-to-br from-black via-[#0B1120] to-[#1E1B4B] p-10 text-white shadow-2xl">

        <div className="absolute top-0 right-0 w-96 h-96 bg-pink-500/20 blur-3xl rounded-full" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-violet-500/20 blur-3xl rounded-full" />

        <div className="relative z-10 flex items-center justify-between">

          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center">
                <Rocket className="w-7 h-7 text-pink-400" />
              </div>

              <div>
                <h1 className="text-4xl font-bold tracking-tight">
                  Startup Discovery Hub
                </h1>

                <p className="text-gray-400 mt-2">
                  Explore the future of startups inside Unicornia
                </p>
              </div>
            </div>

            <div className="flex items-center gap-6 mt-8">

              <div className="px-5 py-4 rounded-2xl bg-white/5 border border-white/10">
                <p className="text-gray-400 text-xs">
                  Active Startups
                </p>

                <h3 className="text-2xl font-bold mt-2">
                  12,480
                </h3>
              </div>

              <div className="px-5 py-4 rounded-2xl bg-white/5 border border-white/10">
                <p className="text-gray-400 text-xs">
                  Funding This Week
                </p>

                <h3 className="text-2xl font-bold mt-2">
                  $48M
                </h3>
              </div>

              <div className="px-5 py-4 rounded-2xl bg-white/5 border border-white/10">
                <p className="text-gray-400 text-xs">
                  Hiring Startups
                </p>

                <h3 className="text-2xl font-bold mt-2">
                  2,140
                </h3>
              </div>

            </div>
          </div>

          <div className="hidden xl:block">
            <div className="w-[320px] rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl p-6">

              <div className="flex items-center justify-between">
                <h3 className="font-semibold">
                  Trending Startup
                </h3>

                <Crown className="text-yellow-400" />
              </div>

              <div className="mt-6">
                <h2 className="text-3xl font-bold">
                  NeuroVerse AI
                </h2>

                <p className="text-gray-400 mt-3">
                  Building autonomous AI workforce systems
                </p>
              </div>

              <div className="flex items-center justify-between mt-8">
                <div>
                  <p className="text-xs text-gray-400">
                    Growth
                  </p>

                  <h3 className="text-green-400 font-bold mt-1">
                    +280%
                  </h3>
                </div>

                <div>
                  <p className="text-xs text-gray-400">
                    Valuation
                  </p>

                  <h3 className="font-bold mt-1">
                    $8.4M
                  </h3>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Search + Filters */}
      <div className="bg-white rounded-[32px] border border-gray-200 shadow-sm p-6 mt-8">

        <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6">

          {/* Search */}
          <div className="relative flex-1">

            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />

            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search startups, technologies, founders..."
              className="w-full pl-14 pr-5 py-5 rounded-2xl border border-gray-200 bg-gray-50 outline-none text-sm"
            />

          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-3">

            {categories.map((category) => (

              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-3 rounded-2xl text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-black text-white shadow-lg'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                }`}
              >
                {category}
              </button>

            ))}

          </div>

        </div>
      </div>

      {/* Startup Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7 mt-8">

        {filteredStartups.map((startup) => (

          <div
            key={startup.id}
            className="group relative overflow-hidden rounded-[32px] border border-gray-200 bg-white p-7 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
          >

            {/* Glow */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-pink-500/10 to-violet-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-all" />

            {/* Header */}
            <div className="relative z-10 flex items-start justify-between">

              <div className="flex items-center gap-4">

                <div className="w-16 h-16 rounded-2xl bg-black text-white flex items-center justify-center text-lg font-bold">
                  {startup.initials}
                </div>

                <div>

                  <h2 className="text-xl font-semibold">
                    {startup.name}
                  </h2>

                  <p className="text-gray-500 text-sm mt-1">
                    {startup.category}
                  </p>

                </div>

              </div>

              <div className="px-3 py-2 rounded-2xl bg-green-100 text-green-700 text-xs font-semibold">
                {startup.match} Match
              </div>

            </div>

            {/* Tagline */}
            <p className="text-gray-600 text-sm leading-relaxed mt-6 relative z-10">
              {startup.tagline}
            </p>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-4 mt-7 relative z-10">

              <div className="rounded-2xl bg-gray-50 p-4">
                <Users className="w-4 h-4 text-gray-500" />

                <h3 className="font-bold mt-3">
                  {startup.members}
                </h3>

                <p className="text-xs text-gray-400 mt-1">
                  Members
                </p>
              </div>

              <div className="rounded-2xl bg-gray-50 p-4">
                <TrendingUp className="w-4 h-4 text-gray-500" />

                <h3 className="font-bold mt-3 text-green-600">
                  {startup.growth}
                </h3>

                <p className="text-xs text-gray-400 mt-1">
                  Growth
                </p>
              </div>

              <div className="rounded-2xl bg-gray-50 p-4">
                <Sparkles className="w-4 h-4 text-gray-500" />

                <h3 className="font-bold mt-3">
                  {startup.stage}
                </h3>

                <p className="text-xs text-gray-400 mt-1">
                  Stage
                </p>
              </div>

            </div>

            {/* Extra Info */}
            <div className="flex items-center justify-between mt-7 relative z-10">

              <div>
                <p className="text-xs text-gray-400">
                  Founder
                </p>

                <h3 className="font-semibold mt-1">
                  {startup.founder}
                </h3>
              </div>

              <div>
                <p className="text-xs text-gray-400">
                  Valuation
                </p>

                <h3 className="font-semibold mt-1">
                  {startup.valuation}
                </h3>
              </div>

            </div>

            {/* Status */}
            <div className="flex items-center justify-between mt-7 relative z-10">

              <div className="flex items-center gap-3">

                <span
                  className={`px-4 py-2 rounded-2xl text-xs font-semibold ${
                    startup.status === 'Hiring'
                      ? 'bg-green-100 text-green-700'
                      : startup.status === 'Fundraising'
                      ? 'bg-yellow-100 text-yellow-700'
                      : 'bg-blue-100 text-blue-700'
                  }`}
                >
                  {startup.status}
                </span>

                <span className="text-xs text-gray-500">
                  {startup.users} users
                </span>

              </div>

            </div>

            {/* Buttons */}
            <div className="grid grid-cols-2 gap-4 mt-8 relative z-10">

              <button className="py-4 rounded-2xl border border-gray-200 hover:bg-gray-100 transition-all font-medium">
                View Startup
              </button>

              <button className="py-4 rounded-2xl bg-black text-white hover:scale-[1.02] transition-all font-medium flex items-center justify-center gap-2">
                <MessageCircle className="w-4 h-4" />
                Contact
              </button>

            </div>

          </div>

        ))}

      </div>
    </div>
  );
}
