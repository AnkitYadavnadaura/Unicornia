// /components/dashboard/ReferralSystem.tsx

'use client'

export default function ReferralSystem() {
  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-[30px] p-8 text-white shadow-sm mt-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-4xl font-black">
            Referral Program
          </h2>

          <p className="mt-3 text-white/80 max-w-xl">
            Invite builders and earn Unicornia tokens.
          </p>
        </div>

        <button className="rounded-2xl bg-white text-black px-6 py-4 font-bold">
          Invite Friends
        </button>
      </div>

      <div className="grid grid-cols-3 gap-6 mt-10">
        <div className="rounded-3xl bg-white/10 p-6">
          <p className="text-white/70">
            Total Referrals
          </p>

          <h3 className="text-5xl font-black mt-4">
            128
          </h3>
        </div>

        <div className="rounded-3xl bg-white/10 p-6">
          <p className="text-white/70">
            Earned Tokens
          </p>

          <h3 className="text-5xl font-black mt-4">
            4,500
          </h3>
        </div>

        <div className="rounded-3xl bg-white/10 p-6">
          <p className="text-white/70">
            Referral Rank
          </p>

          <h3 className="text-5xl font-black mt-4">
            #12
          </h3>
        </div>
      </div>
    </div>
  )
}
