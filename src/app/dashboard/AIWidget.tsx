'use client'

export default function AIWidget() {
  return (
    <div className="bg-gradient-to-r from-pink-500 to-violet-500 rounded-[30px] p-8 text-white shadow-sm mt-8">
      <h2 className="text-4xl font-black">
        AI Startup Assistant
      </h2>

      <p className="mt-4 text-white/80 max-w-2xl">
        Get startup advice, funding guidance, and AI-powered recommendations.
      </p>

      <div className="flex gap-4 mt-8">
        <input
          placeholder="Ask AI anything"
          className="flex-1 px-5 py-4 rounded-2xl bg-white/20 outline-none placeholder:text-white/70"
        />

        <button className="rounded-2xl bg-white text-black px-6 py-4 font-bold">
          Generate
        </button>
      </div>
    </div>
  )
}
