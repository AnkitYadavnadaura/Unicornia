import Sidebar from 'Sidebar'
import Topbar from 'Topbar'
import StatsCards from 'StatsCards'
import TaskBoard from './TaskBoard'
import Wallet from './Wallet'
import Notifications from 'Notifications'
import Chat from 'Chat'
import AIWidget from 'AIWidget'
import Analytics from 'Analytics'
import Profile from 'Profile'
import Settings from 'Settings'
import KanbanBoard from 'KanbanBoard'
import ActivityFeed from 'ActivityFeed'
import Leaderboard from 'Leaderboard'
import StartupExplorer from 'StartupExplorer'
import EventsPanel from 'EventsPanel'
import TokenMarketplace from 'TokenMarketplace'
import FundingHub from 'FundingHub'
import ReferralSystem from 'ReferralSystem'
import TeamCollaboration from 'TeamCollaboration'

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-[#f5f7fb]">
      
      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN */}
      <main className="flex-1 p-6 overflow-y-auto">
        
        {/* TOPBAR */}
        <Topbar />

        {/* HERO */}
        <div className="mt-8 rounded-[40px] bg-gradient-to-r from-[#0f172a] via-[#111827] to-[#1e293b] p-10 text-white relative overflow-hidden">
          
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-pink-500/20 blur-3xl rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-500/20 blur-3xl rounded-full"></div>

          <div className="relative z-10 flex items-center justify-between">
            <div>
              <h1 className="text-6xl font-black leading-tight">
                Build The Future <br />
                Of Startups 🚀
              </h1>

              <p className="text-white/70 text-lg mt-6 max-w-2xl">
                Unicornia helps individuals collaborate with
                startups, earn tokens, gain experience, and
                build the next unicorn ecosystem.
              </p>

              <div className="flex gap-5 mt-8">
                <button className="rounded-2xl bg-white text-black px-8 py-4 font-bold">
                  Explore Startups
                </button>

                <button className="rounded-2xl border border-white/20 px-8 py-4 font-bold">
                  Join Community
                </button>
              </div>
            </div>

            <div className="hidden xl:flex items-center justify-center">
              <div className="w-[320px] h-[320px] rounded-[50px] bg-gradient-to-r from-pink-500 to-cyan-500 shadow-[0_0_100px_rgba(236,72,153,0.45)]"></div>
            </div>
          </div>
        </div>

        {/* STATS */}
        <StatsCards />

        {/* AI */}
        <AIWidget />

        {/* GRID */}
        <div className="grid grid-cols-2 gap-6">
          <TaskBoard />
          <Wallet />
        </div>

        {/* ANALYTICS */}
        <Analytics />

        {/* KANBAN */}
        <KanbanBoard />

        {/* STARTUPS */}
        <StartupExplorer />

        {/* FUNDING */}
        <FundingHub />

        {/* MARKETPLACE */}
        <TokenMarketplace />

        {/* EVENTS */}
        <EventsPanel />

        {/* TEAM */}
        <TeamCollaboration />

        {/* REFERRAL */}
        <ReferralSystem />

        {/* COMMUNITY */}
        <div className="grid grid-cols-2 gap-6">
          <Chat />
          <Notifications />
        </div>

        {/* ACTIVITY */}
        <ActivityFeed />

        {/* LEADERBOARD */}
        <Leaderboard />

        {/* PROFILE */}
        <Profile />

        {/* SETTINGS */}
        <Settings />

        {/* FOOTER */}
        <footer className="mt-12 rounded-[30px] bg-black text-white p-10">
          <div className="grid grid-cols-4 gap-10">
            
            <div>
              <h2 className="text-3xl font-black">
                UNICORNIA
              </h2>

              <p className="text-white/60 mt-4">
                Building the future startup ecosystem for
                founders, developers, designers, and AI
                innovators.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-5">
                Platform
              </h3>

              <div className="space-y-3 text-white/60">
                <p>Dashboard</p>
                <p>Funding</p>
                <p>Marketplace</p>
                <p>Startups</p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-5">
                Community
              </h3>

              <div className="space-y-3 text-white/60">
                <p>Discord</p>
                <p>Events</p>
                <p>Hackathons</p>
                <p>Leaderboard</p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-5">
                Legal
              </h3>

              <div className="space-y-3 text-white/60">
                <p>Privacy</p>
                <p>Terms</p>
                <p>Security</p>
                <p>Support</p>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 mt-10 pt-6 flex items-center justify-between">
            <p className="text-white/50">
              © 2026 Unicornia. All rights reserved.
            </p>

            <div className="flex gap-4">
              <button className="w-12 h-12 rounded-2xl bg-white/10"></button>
              <button className="w-12 h-12 rounded-2xl bg-white/10"></button>
              <button className="w-12 h-12 rounded-2xl bg-white/10"></button>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}
