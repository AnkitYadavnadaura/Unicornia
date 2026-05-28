// /components/dashboard/TokenMarketplace.tsx

'use client'

const items = [
  {
    id: 1,
    title: 'UI Design Pack',
    price: 240,
  },
  {
    id: 2,
    title: 'AI Prompt Bundle',
    price: 520,
  },
  {
    id: 3,
    title: 'Startup Branding Kit',
    price: 780,
  },
]

export default function TokenMarketplace() {
  return (
    <div className="bg-white rounded-[30px] p-8 shadow-sm mt-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-black">
            Marketplace
          </h2>

          <p className="text-gray-500 mt-2">
            Spend your Unicornia Tokens
          </p>
        </div>

        <button className="rounded-2xl bg-black text-white px-6 py-4">
          Sell Asset
        </button>
      </div>

      <div className="grid grid-cols-3 gap-6 mt-8">
        {items.map((item) => (
          <div
            key={item.id}
            className="rounded-3xl border border-gray-100 p-6"
          >
            <div className="h-[180px] rounded-3xl bg-gradient-to-r from-pink-500 to-cyan-500"></div>

            <h3 className="text-2xl font-black mt-6">
              {item.title}
            </h3>

            <div className="flex items-center justify-between mt-6">
              <h4 className="text-3xl font-black">
                {item.price} UT
              </h4>

              <button className="rounded-xl bg-black text-white px-5 py-3">
                Buy
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
