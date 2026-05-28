// /app/dashboard/page.tsx

'use client'

import { useState } from 'react'

import Sidebar from './Sidebar'

import Topbar from './Topbar'

import StatsCards from './StatsCards'

import TaskBoard from './TaskBoard'

import Wallet from './Wallet'

import Notifications from './Notifications'

import Chat from './Chat'

import AIWidget from './AIWidget'

import Analytics from './Analytics'

import Profile from './Profile'

import Settings from './Settings'

import KanbanBoard from './KanbanBoard'

import ActivityFeed from './ActivityFeed'

import Leaderboard from './Leaderboard'

import StartupExplorer from './StartupExplorer'

import EventsPanel from './EventsPanel'

import TokenMarketplace from './TokenMarketplace'

import FundingHub from './FundingHub'

import ReferralSystem from './ReferralSystem'

import TeamCollaboration from './TeamCollaboration'

export default function DashboardPage() {
  const [activePage, setActivePage] =
    useState('dashboard')

  return (
    <div className="flex min-h-screen bg-[#f5f7fb]">
      
      <Sidebar
        activePage={activePage}
        setActivePage={setActivePage}
      />

      <main className="flex-1 p-6 overflow-y-auto">
        
        <Topbar />

        {/* DASHBOARD */}
        {activePage === 'dashboard' && (
          <>
            <StatsCards />

            <AIWidget />

            <KanbanBoard />

            <ActivityFeed />

            <Leaderboard />
          </>
        )}

        {/* TASKS */}
        {activePage === 'tasks' && (
          <>
            <TaskBoard />

            <KanbanBoard />
          </>
        )}

        {/* WALLET */}
        {activePage === 'wallet' && (
          <>
            <Wallet />

            <FundingHub />

            <ReferralSystem />
          </>
        )}

        {/* ANALYTICS */}
        {activePage === 'analytics' && (
          <>
            <Analytics />

            <Leaderboard />
          </>
        )}

        {/* CHAT */}
        {activePage === 'chat' && (
          <>
            <Chat />

            <TeamCollaboration />
          </>
        )}

        {/* NOTIFICATIONS */}
        {activePage === 'notifications' && (
          <>
            <Notifications />

            <ActivityFeed />
          </>
        )}

        {/* STARTUPS */}
        {activePage === 'startups' && (
          <>
            <StartupExplorer />

            <FundingHub />

            <EventsPanel />
          </>
        )}

        {/* MARKETPLACE */}
        {activePage === 'marketplace' && (
          <>
            <TokenMarketplace />
          </>
        )}

        {/* PROFILE */}
        {activePage === 'profile' && (
          <>
            <Profile />
          </>
        )}

        {/* SETTINGS */}
        {activePage === 'settings' && (
          <>
            <Settings />
          </>
        )}
      </main>
    </div>
  )
}
