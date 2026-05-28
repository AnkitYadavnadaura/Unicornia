// /components/dashboard/StartupExplorer.tsx

'use client'

import { Search } from 'lucide-react'
import { useState } from 'react'

const startupsData = [
  {
    id: 1,
    name: 'Aether AI',
    category: 'Artificial Intelligence',
    funding: '$120K',
    members: 14,
  },
  {
    id: 2,
    name: 'Nova Chain',
    category: 'Blockchain',
    funding: '$80K',
    members: 8,
  },
  {
    id: 3,
    name: 'FarmX',
    category: 'AgriTech',
    funding: '$45K',
    members: 5,
  },
]

export default function StartupExplorer() {
  const [search, setSearch] = useState('')

  const filtered = startupsData.filter((startup) =>
    startup.name
      .toLowerCase()
      .includes(search.toLowerCase())
  )

  return (
    <div className="bg-white rounded-[30px] p-8 shadow-sm mt-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-black">
            Startup Explorer
          </h2>

          <p className="text-gray-500 mt-2">
            Discover innovative startups
          </p>
        </div>

        <div className="flex items-center gap-3 bg-[#f5f7fb] px-5 py-4 rounded-2xl w-[320px]">
          <Search size={18} />

          <input
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            placeholder="Search startups"
            className="bg-transparent outline-none w-full"
          />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6 mt-8">
        {filtered.map((startup) => (
          <div
            key={startup.id}
            className="rounded-3xl border border-gray-100 p-6"
          >
            <div className="flex items-center justify-between">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-pink-500 to-violet-500"></div>

              <button className="rounded-xl bg-black text-white px-4 py-2">
                Follow
              </button>
            </div>

            <h3 className="text-2xl font-black mt-6">
              {startup.name}
            </h3>

            <p className="text-gray-500 mt-2">
              {startup.category}
            </p>

            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="rounded-2xl bg-[#f5f7fb] p-4">
                <p className="text-gray-500 text-sm">
                  Funding
                </p>

                <h4 className="font-black text-xl mt-2">
                  {startup.funding}
                </h4>
              </div>

              <div className="rounded-2xl bg-[#f5f7fb] p-4">
                <p className="text-gray-500 text-sm">
                  Members
                </p>

                <h4 className="font-black text-xl mt-2">
                  {startup.members}
                </h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
