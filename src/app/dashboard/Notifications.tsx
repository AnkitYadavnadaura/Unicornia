'use client'

const items = [
  'Startup invited you',
  'Task completed reward credited',
  'XP increased',
]

export default function Notifications() {
  return (
    <div className="bg-white rounded-[30px] p-8 shadow-sm mt-8">
      <h2 className="text-3xl font-black">
        Notifications
      </h2>

      <div className="space-y-4 mt-6">
        {items.map((item) => (
          <div
            key={item}
            className="rounded-2xl bg-[#f5f7fb] p-5"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}
