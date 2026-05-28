'use client'

import { useState } from 'react'

const initialTasks = [
  {
    id: 1,
    title: 'Build AI SaaS Landing Page',
    reward: 500,
    status: 'In Progress',
  },
  {
    id: 2,
    title: 'Create Investor Pitch Deck',
    reward: 900,
    status: 'Pending',
  },
]

export default function TaskBoard() {
  const [tasks, setTasks] = useState(initialTasks)

  const removeTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div className="bg-white rounded-[30px] p-8 shadow-sm mt-8">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-black">
          Active Tasks
        </h2>

        <button className="rounded-2xl bg-black text-white px-6 py-4 font-semibold">
          Create Task
        </button>
}
