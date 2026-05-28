// /components/dashboard/Leaderboard.tsx

'use client'

const users = [
  {
    id: 1,
    name: 'Ankit',
    xp: 12450,
  },
  {
    id: 2,
    name: 'Rohit',
    xp: 11200,
  },
  {
    id: 3,
    name: 'Aman',
    xp: 9800,
  },
]

export default function Leaderboard() {
  return (
    <div className="bg-white rounded-[30px] p-8 shadow-sm mt-8">
      <h2 className="text-3xl font-black">
        Leaderboard
      </h2>

      <div className="space-y-5 mt-8">
        {users.map((user, index) => (
          <div
            key={user.id}
            className="rounded-2xl bg-[#f5f7fb] p-5 flex items-center justify-between"
          >
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-pink-500 to-violet-500 text-white flex items-center justify-center font-black">
                {index + 1}
              </div>

              <div>
                <h4 className="font-bold text-xl">
                  {user.name}
                </h4>

                <p className="text-gray-500">
                  {user.xp} XP
                </p>
              </div>
            </div>

            <button className="rounded-xl bg-black text-white px-5 py-3">
              Profile
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
