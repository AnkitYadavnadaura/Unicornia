// /app/dashboard/Topbar.tsx

'use client'

import { motion } from 'framer-motion'

import {
  Bell,
  Search,
  Sparkles,
  Wallet,
  Command,
} from 'lucide-react'

export default function Topbar() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      className="sticky top-6 z-40"
    >
      <div className="rounded-[36px] bg-white/70 backdrop-blur-3xl border border-white/30 px-8 py-6 shadow-[0_10px_60px_rgba(0,0,0,0.06)]">
        
        <div className="flex items-center justify-between">
          
          {/* LEFT */}
          <div>
            <h1 className="text-5xl font-black text-[#081120]">
              Welcome Back 👋
            </h1>

            <p className="text-gray-500 mt-3 text-lg">
              Build the next unicorn startup ecosystem.
            </p>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-5">
            
            {/* SEARCH */}
            <motion.div
              whileHover={{
                scale: 1.02,
              }}
              className="hidden xl:flex items-center gap-4 rounded-2xl bg-[#f5f7fb] px-5 py-4 w-[360px] border border-gray-100"
            >
              <Search
                size={20}
                className="text-gray-500"
              />

              <input
                type="text"
                placeholder="Search startups, tasks, AI..."
                className="bg-transparent outline-none w-full text-[#081120]"
              />

              <div className="flex items-center gap-2 rounded-xl bg-white px-3 py-2 border border-gray-100 text-sm text-gray-500">
                <Command size={14} />

                K
              </div>
            </motion.div>

            {/* TOKENS */}
            <motion.div
              whileHover={{
                y: -3,
              }}
              className="flex items-center gap-4 rounded-2xl bg-gradient-to-r from-[#0f172a] to-[#111827] px-6 py-4 text-white shadow-[0_10px_40px_rgba(0,0,0,0.15)]"
            >
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-pink-500 to-cyan-500 flex items-center justify-center">
                <Wallet size={20} />
              </div>

              <div>
                <p className="text-white/60 text-sm">
                  Wallet
                </p>

                <h3 className="text-xl font-black">
                  12,450 UT
                </h3>
              </div>
            </motion.div>

            {/* AI */}
            <motion.button
              whileHover={{
                scale: 1.05,
                rotate: 3,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="w-16 h-16 rounded-[24px] bg-gradient-to-r from-pink-500 via-violet-500 to-cyan-500 flex items-center justify-center text-white shadow-[0_0_50px_rgba(236,72,153,0.45)]"
            >
              <Sparkles />
            </motion.button>

            {/* NOTIFICATION */}
            <motion.button
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="relative w-16 h-16 rounded-[24px] bg-white border border-gray-100 flex items-center justify-center shadow-sm"
            >
              <Bell className="text-[#081120]" />

              <div className="absolute top-3 right-3 w-3 h-3 rounded-full bg-pink-500 shadow-[0_0_20px_rgba(236,72,153,0.8)]"></div>
            </motion.button>

            {/* PROFILE */}
            <motion.div
              whileHover={{
                scale: 1.03,
              }}
              className="flex items-center gap-4 rounded-[24px] bg-white border border-gray-100 px-5 py-3 shadow-sm cursor-pointer"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-pink-500 to-cyan-500"></div>

              <div className="hidden xl:block">
                <h3 className="font-black text-[#081120]">
                  Ankit Yadav
                </h3>

                <p className="text-gray-500 text-sm">
                  AI Founder
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
