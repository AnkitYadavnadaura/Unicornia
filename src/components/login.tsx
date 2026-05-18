import React, { useState } from "react";
type LoginOverlayProps = {
  close: () => void;
};
export default function LoginOverlay({ close }: LoginOverlayProps) {
  const [showLogin] = useState(true);
  const [selectedRole, setSelectedRole] = useState("startup");

  return (
    <div className="min-h-screen absolute bg-black flex items-center justify-center">
      
      {/* Open Button */}

      {/* Overlay */}
      {showLogin && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-xl px-6">
          
          {/* Modal */}
          <div className="relative w-full max-w-2xl rounded-[40px] border border-white/10 bg-[#080808]/95 overflow-hidden shadow-[0_0_80px_rgba(236,72,153,0.25)]">

            {/* Background Glow */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -top-32 -left-20 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-32 -right-20 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl"></div>
            </div>

            {/* Close Button */}
            <button
              onClick={close}
              className="absolute top-6 right-6 z-20 w-12 h-12 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition text-2xl text-white"
            >
              ×
            </button>

            {/* Content */}
            <div className="relative z-10 p-10 md:p-14 text-white">

              {/* Logo */}
              <div className="text-center mb-10">
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-[30px] bg-gradient-to-r from-pink-500 to-violet-500 text-5xl font-black shadow-2xl shadow-pink-500/30 mb-6">
                  U
                </div>

                <h2 className="text-5xl md:text-6xl font-black leading-none">
                  Welcome To
                  <span className="block bg-gradient-to-r from-pink-500 to-cyan-500 bg-clip-text text-transparent mt-2">
                    Unicornia
                  </span>
                </h2>

                <p className="text-gray-400 text-lg mt-5 max-w-xl mx-auto">
                  Join the futuristic startup ecosystem.
                </p>
              </div>

              {/* Role Toggle */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <button
                  onClick={() => setSelectedRole("startup")}
                  className={`py-4 rounded-2xl text-lg font-bold transition-all ${
                    selectedRole === "startup"
                      ? "bg-gradient-to-r from-pink-500 to-violet-500 shadow-2xl shadow-pink-500/30"
                      : "bg-white/5 border border-white/10 hover:bg-white/10"
                  }`}
                >
                  Startup Login
                </button>

                <button
                  onClick={() => setSelectedRole("individual")}
                  className={`py-4 rounded-2xl text-lg font-bold transition-all ${
                    selectedRole === "individual"
                      ? "bg-gradient-to-r from-cyan-500 to-blue-500 shadow-2xl shadow-cyan-500/30"
                      : "bg-white/5 border border-white/10 hover:bg-white/10"
                  }`}
                >
                  Individual Login
                </button>
              </div>

              {/* Form */}
              <div className="space-y-5">

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-6 py-5 rounded-2xl bg-white/5 border border-white/10 focus:outline-none focus:border-pink-500 text-lg"
                />

                <input
                  type="password"
                  placeholder="Enter password"
                  className="w-full px-6 py-5 rounded-2xl bg-white/5 border border-white/10 focus:outline-none focus:border-cyan-500 text-lg"
                />

                <div className="flex items-center justify-between text-sm text-gray-400">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="accent-pink-500" />
                    Remember me
                  </label>

                  <button className="hover:text-pink-400 transition">
                    Forgot Password?
                  </button>
                </div>

                <button className="w-full py-5 rounded-2xl bg-gradient-to-r from-pink-500 via-violet-500 to-cyan-500 text-xl font-black hover:scale-[1.02] transition-all shadow-[0_0_50px_rgba(236,72,153,0.35)]">
                  Enter Unicornia
                </button>
              </div>

            </div>
          </div>
        </div>
      )}
    </div>
  );
}
