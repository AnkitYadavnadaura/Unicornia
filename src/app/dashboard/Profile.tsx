'use client'

export default function Profile() {
  return (
    <div className="bg-white rounded-[30px] p-8 shadow-sm mt-8">
      <div className="flex items-center gap-6">
        <div className="w-28 h-28 rounded-[30px] bg-gradient-to-r from-pink-500 to-violet-500"></div>

        <div>
          <h2 className="text-4xl font-black">
            Ankit Yadav
          </h2>

          <p className="text-gray-500 mt-2">
            Full Stack + AI Builder
          </p>
        </div>
      </div>
    </div>
  )
}
