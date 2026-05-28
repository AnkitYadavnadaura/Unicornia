'use client'

export default function Chat() {
  return (
    <div className="bg-white rounded-[30px] p-8 shadow-sm mt-8">
      <h2 className="text-3xl font-black">
        Community Chat
      </h2>

      <div className="space-y-5 mt-8">
        <div className="bg-[#f5f7fb] rounded-2xl p-5">
          Hello builders 👋
        </div>

        <div className="bg-black text-white rounded-2xl p-5 ml-auto w-fit">
          Working on AI startup.
        </div>
      </div>

      <div className="flex gap-4 mt-8">
        <input
          placeholder="Type message"
          className="flex-1 px-5 py-4 rounded-2xl border border-gray-200 outline-none"
        />

        <button className="rounded-2xl bg-black text-white px-6 py-4">
          Send
        </button>
      </div>
    </div>
  )
}
