// /components/dashboard/FundingHub.tsx

'use client'

const fundingRounds = [
  {
    id: 1,
    startup: 'Aether AI',
    raised: '$120K',
    stage: 'Seed',
  },
  {
    id: 2,
    startup: 'Nova Chain',
    raised: '$400K',
    stage: 'Series A',
  },
  {
    id: 3,
    startup: 'FarmX',
    raised: '$60K',
    stage: 'Angel',
  },
]

export default function FundingHub() {
  return (
    <div className="bg-white rounded-[30px] p-8 shadow-sm mt-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-black">
            Funding Hub
          </h2>

          <p className="text-gray-500 mt-2">
            Active startup investments
          </p>
        </div>

        <button className="rounded-2xl bg-black text-white px-6 py-4">
          Invest Now
        </button>
      </div>

      <div className="space-y-5 mt-8">
        {fundingRounds.map((item) => (
          <div
            key={item.id}
            className="rounded-3xl border border-gray-100 p-6 flex items-center justify-between"
          >
            <div>
              <h3 className="text-2xl font-black">
                {item.startup}
              </h3>

              <p className="text-gray-500 mt-2">
                {item.stage}
              </p>
            </div>

            <div className="text-right">
              <h4 className="text-3xl font-black">
                {item.raised}
              </h4>

              <button className="mt-4 rounded-xl bg-black text-white px-5 py-3">
                View
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
