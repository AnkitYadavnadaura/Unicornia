// /components/dashboard/TeamCollaboration.tsx

'use client'

const members = [
  {
    id: 1,
    name: 'Ankit',
    role: 'Frontend Engineer',
  },
  {
    id: 2,
    name: 'Rohit',
    role: 'AI Engineer',
  },
  {
    id: 3,
    name: 'Aman',
    role: 'Backend Developer',
  },
]

export default function TeamCollaboration() {
  return (
    <div className="bg-white rounded-[30px] p-8 shadow-sm mt-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-black">
            Team Collaboration
          </h2>

          <p className="text-gray-500 mt-2">
            Work with startup teams
          </p>
        </div>

        <button className="rounded-2xl bg-black text-white px-6 py-4">
          Invite Member
        </button>
      </div>

      <div className="space-y-5 mt-8">
        {members.map((member) => (
          <div
            key={member.id}
            className="rounded-3xl border border-gray-100 p-6 flex items-center justify-between"
          >
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-pink-500 to-violet-500"></div>

              <div>
                <h3 className="text-2xl font-bold">
                  {member.name}
                </h3>

                <p className="text-gray-500 mt-2">
                  {member.role}
                </p>
              </div>
            </div>

            <button className="rounded-xl bg-black text-white px-5 py-3">
              Message
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
