// TaskBoard.tsx

'use client'

import { useState } from 'react'

type Task = {
  id: number
  title: string
  reward: number
  status: string
}

const initialTasks: Task[] = [
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
  const [tasks, setTasks] =
    useState<Task[]>(initialTasks)

  const removeTask = (id: number) => {
    setTasks(
      tasks.filter((task) => task.id !== id)
    )
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
      </div>

      <div className="space-y-5">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="border border-gray-100 rounded-3xl p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold">
                  {task.title}
                </h3>

                <p className="text-gray-500 mt-2">
                  Reward: {task.reward} UT
                </p>
              </div>

              <div className="flex items-center gap-4">
                <span className="px-4 py-2 rounded-full bg-cyan-100 text-cyan-700 font-semibold text-sm">
                  {task.status}
                </span>

                <button
                  onClick={() => removeTask(task.id)}
                  className="rounded-2xl bg-red-500 text-white px-5 py-3"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
