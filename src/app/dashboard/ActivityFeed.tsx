// /components/dashboard/ActivityFeed.tsx

'use client'

const activities = [
  {
    id: 1,
    title: 'Joined Aether AI',
    time: '2 min ago',
  },
  {
    id: 2,
    title: 'Completed Wallet Design',
    time: '10 min ago',
  },
  {
    id: 3,
    title: 'Received 500 UT reward',
    time: '1 hour ago',
  },
]

export default function ActivityFeed() {
  return (
    <div className="bg-white rounded-[30px] p-8 shadow-sm mt-8">
      <h2 className="text-3xl font-black">
        Activity Feed
      </h2>

      <div className="space-y-5 mt-8">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="rounded-2xl bg-[#f5f7fb] p-5 flex items-center justify-between"
          >
            <div>
              <h4 className="font-bold">
                {activity.title}
              </h4>

              <p className="text-gray-500 mt-2">
                {activity.time}
              </p>
            </div>

            <button className="rounded-xl bg-black text-white px-4 py-2">
              View
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
