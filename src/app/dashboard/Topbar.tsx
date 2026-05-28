'use client'

import { Bell, Search } from 'lucide-react'

export default function Topbar() {
  return (
    <div className="bg-white rounded-[30px] p-6 flex items-center justify-between shadow-sm">
      <div>
        <h2 className="text-4xl font-black">
          Welcome Back 👋
        </h2>

        <p className="text-gray-500 mt-2">
          Build your future startup ecosystem.
        </p>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-3 bg-[#f5f7fb] rounded-2xl px-5 py-4 w-[320px]">
          <Search size={18} />

          <input
            placeholder="Search anything"
            className="bg-transparent outline-none w-full"
          />
        </div>

        <button className="w-14 h-14 rounded-2xl bg-[#f5f7fb] flex items-center justify-center">
          <Bell />
        </button>
      </div>
    </div>
  )
}
