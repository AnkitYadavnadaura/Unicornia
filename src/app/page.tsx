'use client'
import React, { useState } from "react";
import LoginOverlay from "../components/login";
import SignUpOverlay from "../components/signup";
export default function UnicorniaApp() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-pink-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-violet-500 rounded-full blur-3xl opacity-10 animate-bounce"></div>
      </div>
      {/*overlay */}
      {showLogin && (
  <LoginOverlay close={() => setShowLogin(false)} />
)}
      {showSignup && (
  <SignupOverlay close={() => setShowSignup(false)} />
)}

      {/* Navbar */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-black/40 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-pink-500 to-violet-500 flex items-center justify-center text-2xl font-black">
              U
            </div>
            <div>
              <h1 className="text-2xl font-black tracking-wider">UNICORNIA</h1>
              <p className="text-xs text-gray-400">The Startup Nation</p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-semibold">
            <a href="#features" className="hover:text-pink-400 transition">Features</a>
            <a href="#ecosystem" className="hover:text-pink-400 transition">Ecosystem</a>
            <a href="#tokens" className="hover:text-pink-400 transition">Tokens</a>
            <a href="#community" className="hover:text-pink-400 transition">Community</a>
            <a href="#investors" className="hover:text-pink-400 transition">Investors</a>
          </div>

          <div className="flex items-center gap-4">
            <button onClick={() => setShowLogin(true)} className="px-5 py-2 rounded-xl border border-white/20 hover:bg-white/10 transition">
              Login
            </button>
            <button onClick={() => setShowSignup(true)} className="px-5 py-2 rounded-xl bg-gradient-to-r from-pink-500 to-violet-500 hover:scale-105 transition-transform shadow-2xl shadow-pink-500/30">
              Join Unicornia
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-pink-500/30 bg-pink-500/10 mb-8">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
              <span className="text-sm font-semibold">100+ Founders Already Building</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-black leading-none mb-8">
              Build The
              <span className="block bg-gradient-to-r from-pink-500 via-violet-500 to-cyan-500 bg-clip-text text-transparent">
                Startup with Unicornia
              </span>
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mb-10">
              Unicornia is a futuristic startup ecosystem where founders, developers,
              creators, investors, and dreamers collaborate using a token-powered
              economy designed to create the next generation of unicorn startups.
            </p>

            <div className="flex flex-wrap gap-5 mb-10">
              <button onClick={() => setShowSignup(true)} className="px-8 py-4 rounded-2xl bg-gradient-to-r from-pink-500 to-violet-500 text-lg font-bold hover:scale-105 transition-transform shadow-2xl shadow-pink-500/30">
                Register Startup
              </button>

              <button onClick={() => setShowSignup(true)} className="px-8 py-4 rounded-2xl border border-white/20 bg-white/5 text-lg font-bold hover:bg-white/10 transition">
                Join as Individual
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6">
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">
                <h2 className="text-4xl font-black text-pink-400">12K+</h2>
                <p className="text-gray-400 mt-2">Builders</p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">
                <h2 className="text-4xl font-black text-cyan-400">850+</h2>
                <p className="text-gray-400 mt-2">Startups</p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">
                <h2 className="text-4xl font-black text-violet-400">₹25Cr+</h2>
                <p className="text-gray-400 mt-2">Token Economy</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-cyan-500 blur-3xl opacity-30 rounded-full"></div>

            <div className="relative bg-white/5 border border-white/10 backdrop-blur-2xl rounded-[40px] p-8 shadow-2xl">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-3xl font-black">Startup Dashboard</h2>
                  <p className="text-gray-400 mt-1">Real-time ecosystem activity</p>
                </div>

                <div className="w-16 h-16 rounded-3xl bg-gradient-to-r from-pink-500 to-violet-500 flex items-center justify-center text-2xl font-black">
                  U
                </div>
              </div>

              <div className="space-y-5">
                <div className="p-5 rounded-3xl bg-black/40 border border-white/10 flex items-center justify-between hover:scale-[1.02] transition-transform">
                  <div>
                    <h3 className="text-xl font-bold">AI Healthcare Startup</h3>
                    <p className="text-gray-400 mt-1">Raised 250K Tokens</p>
                  </div>
                  <button className="px-5 py-2 rounded-xl bg-green-500/20 text-green-400 border border-green-500/30">
                    Trending
                  </button>
                </div>

                <div className="p-5 rounded-3xl bg-black/40 border border-white/10 flex items-center justify-between hover:scale-[1.02] transition-transform">
                  <div>
                    <h3 className="text-xl font-bold">AgriTech Revolution</h3>
                    <p className="text-gray-400 mt-1">120 New Investors Joined</p>
                  </div>
                  <button className="px-5 py-2 rounded-xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                    Growing
                  </button>
                </div>

                <div className="p-5 rounded-3xl bg-black/40 border border-white/10 flex items-center justify-between hover:scale-[1.02] transition-transform">
                  <div>
                    <h3 className="text-xl font-bold">Next Gen Robotics</h3>
                    <p className="text-gray-400 mt-1">Seeking Developers</p>
                  </div>
                  <button className="px-5 py-2 rounded-xl bg-pink-500/20 text-pink-400 border border-pink-500/30">
                    Hiring
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-5 mt-8">
                <div className="p-6 rounded-3xl bg-gradient-to-r from-pink-500/20 to-violet-500/20 border border-pink-500/20">
                  <p className="text-gray-300">Tokens Distributed</p>
                  <h2 className="text-4xl font-black mt-2">2.5M</h2>
                </div>

                <div className="p-6 rounded-3xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/20">
                  <p className="text-gray-300">Active Founders</p>
                  <h2 className="text-4xl font-black mt-2">4,500</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-black mb-6">
              Why <span className="text-pink-500">Unicornia</span>?
            </h2>
            <p className="text-gray-400 text-xl max-w-3xl mx-auto">
              A powerful digital nation for startups where innovation, funding,
              networking, and collaboration happen together.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Startup Funding',
                desc: 'Raise funds using Unicornia Tokens and investor ecosystem.',
                color: 'from-pink-500 to-rose-500'
              },
              {
                title: 'Founder Networking',
                desc: 'Connect with developers, designers, marketers, and investors.',
                color: 'from-violet-500 to-purple-500'
              },
              {
                title: 'Hackathons',
                desc: 'Participate in monthly innovation battles and competitions.',
                color: 'from-cyan-500 to-blue-500'
              },
              {
                title: 'AI Powered Matching',
                desc: 'Find the perfect co-founder or startup opportunity instantly.',
                color: 'from-orange-500 to-red-500'
              },
              {
                title: 'Startup Marketplace',
                desc: 'Buy, sell, collaborate, and scale startup products globally.',
                color: 'from-green-500 to-emerald-500'
              },
              {
                title: 'Token Economy',
                desc: 'Earn and spend tokens while building real startup value.',
                color: 'from-yellow-500 to-orange-500'
              }
            ].map((item, index) => (
              <div
                key={index}
                className="group p-8 rounded-[30px] bg-white/5 border border-white/10 hover:border-pink-500/30 hover:scale-105 transition-all duration-300 backdrop-blur-xl"
              >
                <div className={`w-20 h-20 rounded-3xl bg-gradient-to-r ${item.color} mb-8 group-hover:rotate-6 transition-transform`}></div>
                <h3 className="text-3xl font-black mb-4">{item.title}</h3>
                <p className="text-gray-400 text-lg leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Login and Signup */}
      <section className="py-32 px-6 bg-white/5 border-y border-white/10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10">
          <div className="p-10 rounded-[40px] bg-black/40 border border-white/10 backdrop-blur-2xl">
            <h2 className="text-5xl font-black mb-4">Login</h2>
            <p className="text-gray-400 mb-10 text-lg">
              Welcome back to Unicornia ecosystem.
            </p>

            <div className="space-y-6">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-6 py-5 rounded-2xl bg-white/5 border border-white/10 focus:outline-none focus:border-pink-500 text-lg"
              />

              <input
                type="password"
                placeholder="Enter password"
                className="w-full px-6 py-5 rounded-2xl bg-white/5 border border-white/10 focus:outline-none focus:border-pink-500 text-lg"
              />

              <div className="flex gap-4">
                <button className="flex-1 py-4 rounded-2xl bg-gradient-to-r from-pink-500 to-violet-500 text-lg font-bold hover:scale-[1.02] transition-transform">
                  Login as Startup
                </button>

                <button className="flex-1 py-4 rounded-2xl border border-white/20 bg-white/5 text-lg font-bold hover:bg-white/10 transition">
                  Login as Individual
                </button>
              </div>
            </div>
          </div>

          <div className="p-10 rounded-[40px] bg-black/40 border border-white/10 backdrop-blur-2xl">
            <h2 className="text-5xl font-black mb-4">Signup</h2>
            <p className="text-gray-400 mb-10 text-lg">
              Start your Unicornia journey today.
            </p>

            <div className="space-y-6">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-6 py-5 rounded-2xl bg-white/5 border border-white/10 focus:outline-none focus:border-cyan-500 text-lg"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-6 py-5 rounded-2xl bg-white/5 border border-white/10 focus:outline-none focus:border-cyan-500 text-lg"
              />

              <input
                type="password"
                placeholder="Create Password"
                className="w-full px-6 py-5 rounded-2xl bg-white/5 border border-white/10 focus:outline-none focus:border-cyan-500 text-lg"
              />

              <div className="grid grid-cols-2 gap-4">
                <button className="py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 text-lg font-bold hover:scale-[1.02] transition-transform">
                  Join as Startup
                </button>

                <button className="py-4 rounded-2xl border border-white/20 bg-white/5 text-lg font-bold hover:bg-white/10 transition">
                  Join as Individual
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem */}
      <section id="ecosystem" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-6xl font-black leading-tight mb-8">
                Build The Future
                <span className="block text-cyan-400">Together</span>
              </h2>

              <p className="text-gray-400 text-xl leading-relaxed mb-10">
                Unicornia is not just a platform. It is a digital country where
                startups become economies, developers become innovators, and ideas
                become global companies.
              </p>

              <div className="space-y-6">
                {[
                  'Startup Token System',
                  'Global Founder Network',
                  'AI Powered Startup Growth',
                  'Investor & Mentor Access',
                  'Innovation Challenges',
                  'Collaborative Workspaces'
                ].map((point, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500"></div>
                    <p className="text-xl">{point}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                'Developers',
                'Designers',
                'Founders',
                'Investors',
                'Creators',
                'Hackers'
              ].map((item, i) => (
                <div
                  key={i}
                  className="aspect-square rounded-[35px] bg-white/5 border border-white/10 flex items-center justify-center text-3xl font-black hover:scale-105 hover:border-pink-500/30 transition-all backdrop-blur-xl"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto text-center rounded-[50px] bg-gradient-to-r from-pink-500/20 to-cyan-500/20 border border-white/10 p-16 backdrop-blur-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[radial-gradient(circle_at_top_left,white,transparent)]"></div>

          <h2 className="text-7xl font-black mb-8 leading-tight">
            The Future of Startups
            <span className="block text-transparent bg-gradient-to-r from-pink-500 to-cyan-500 bg-clip-text">
              Starts Here
            </span>
          </h2>

          <p className="text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
            Join Unicornia today and become part of the most futuristic startup
            community designed for dreamers, builders, and innovators.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <button className="px-10 py-5 rounded-2xl bg-gradient-to-r from-pink-500 to-violet-500 text-xl font-black hover:scale-105 transition-transform shadow-2xl shadow-pink-500/30">
              Launch Your Startup
            </button>

            <button className="px-10 py-5 rounded-2xl border border-white/20 bg-white/5 text-xl font-black hover:bg-white/10 transition">
              Explore Community
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-3xl font-black">UNICORNIA</h2>
            <p className="text-gray-400 mt-2">The Startup Nation of The Future</p>
          </div>

          <div className="flex gap-8 text-gray-400 font-semibold">
            <a href="#" className="hover:text-pink-400 transition">Twitter</a>
            <a href="#" className="hover:text-pink-400 transition">Discord</a>
            <a href="#" className="hover:text-pink-400 transition">LinkedIn</a>
            <a href="#" className="hover:text-pink-400 transition">GitHub</a>
          </div>

          <p className="text-gray-500">© 2026 Unicornia. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}




