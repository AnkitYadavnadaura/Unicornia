'use client'

export default function Wallet() {
  return (
    <div className="bg-white rounded-[30px] p-8 shadow-sm mt-8">
      <h2 className="text-3xl font-black">
        Wallet
      </h2>

      <div className="grid grid-cols-2 gap-6 mt-8">
        <div className="rounded-3xl bg-[#f5f7fb] p-6">
          <p className="text-gray-500">
            Available Balance
          </p>

          <h3 className="text-5xl font-black mt-4">
            12,450 UT
          </h3>
        </div>

        <div className="rounded-3xl bg-[#f5f7fb] p-6">
          <p className="text-gray-500">
            Monthly Earnings
          </p>

          <h3 className="text-5xl font-black mt-4">
            +2,450
          </h3>
        </div>
      </div>
    </div>
  )
}
