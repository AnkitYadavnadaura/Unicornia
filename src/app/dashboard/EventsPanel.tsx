// /components/dashboard/EventsPanel.tsx

'use client'

const events = [
  {
    id: 1,
    title: 'AI Startup Pitch',
    date: '28 May',
    location: 'Virtual',
  },
  {
    id: 2,
    title: 'Founder Meetup',
    date: '30 May',
    location: 'Delhi',
  },
  {
    id: 3,
    title: 'Hackathon 2026',
    date: '4 June',
    location: 'Bangalore',
  },
]

export default function EventsPanel() {
  return (
    <div className="bg-white rounded-[30px] p-8 shadow-sm mt-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-black">
            Upcoming Events
          </h2>

          <p className="text-gray-500 mt-2">
            Join community events
          </p>
        </div>

        <button className="rounded-2xl bg-black text-white px-6 py-4">
          Create Event
        </button>
      </div>

      <div className="space-y-5 mt-8">
        {events.map((event) => (
          <div
            key={event.id}
            className="rounded-3xl border border-gray-100 p-6 flex items-center justify-between"
          >
            <div>
              <h3 className="text-2xl font-bold">
                {event.title}
              </h3>

              <p className="text-gray-500 mt-2">
                {event.location}
              </p>
            </div>

            <div className="text-right">
              <h4 className="text-2xl font-black">
                {event.date}
              </h4>

              <button className="mt-4 rounded-xl bg-black text-white px-5 py-3">
                Join
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
