'use client'

export default function Settings() {
  return (
    <div className="bg-white rounded-[30px] p-8 shadow-sm mt-8">
      
      <h2 className="text-3xl font-black">
        Settings
      </h2>

      <p className="text-gray-500 mt-2">
        Manage your Unicornia account preferences
      </p>

      <div className="grid grid-cols-2 gap-6 mt-8">
        
        {/* PROFILE */}
        <div className="rounded-3xl border border-gray-100 p-6">
          <h3 className="text-2xl font-bold">
            Profile Settings
          </h3>

          <div className="space-y-5 mt-6">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full rounded-2xl border border-gray-200 px-5 py-4 outline-none"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full rounded-2xl border border-gray-200 px-5 py-4 outline-none"
            />

            <input
              type="text"
              placeholder="Username"
              className="w-full rounded-2xl border border-gray-200 px-5 py-4 outline-none"
            />

            <button className="rounded-2xl bg-black text-white px-6 py-4 font-semibold">
              Save Profile
            </button>
          </div>
        </div>

        {/* SECURITY */}
        <div className="rounded-3xl border border-gray-100 p-6">
          <h3 className="text-2xl font-bold">
            Security
          </h3>

          <div className="space-y-5 mt-6">
            <input
              type="password"
              placeholder="Current Password"
              className="w-full rounded-2xl border border-gray-200 px-5 py-4 outline-none"
            />

            <input
              type="password"
              placeholder="New Password"
              className="w-full rounded-2xl border border-gray-200 px-5 py-4 outline-none"
            />

            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full rounded-2xl border border-gray-200 px-5 py-4 outline-none"
            />

            <button className="rounded-2xl bg-gradient-to-r from-pink-500 to-violet-500 text-white px-6 py-4 font-semibold">
              Update Password
            </button>
          </div>
        </div>
      </div>

      {/* PREFERENCES */}
      <div className="rounded-3xl border border-gray-100 p-6 mt-8">
        <h3 className="text-2xl font-bold">
          Preferences
        </h3>

        <div className="space-y-5 mt-6">
          
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-bold">
                Email Notifications
              </h4>

              <p className="text-gray-500 text-sm mt-1">
                Receive updates about activity
              </p>
            </div>

            <input type="checkbox" className="w-6 h-6" />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-bold">
                Dark Mode
              </h4>

              <p className="text-gray-500 text-sm mt-1">
                Enable dark appearance
              </p>
            </div>

            <input type="checkbox" className="w-6 h-6" />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-bold">
                Public Profile
              </h4>

              <p className="text-gray-500 text-sm mt-1">
                Allow others to view your profile
              </p>
            </div>

            <input type="checkbox" className="w-6 h-6" />
          </div>
        </div>
      </div>
    </div>
  )
}
