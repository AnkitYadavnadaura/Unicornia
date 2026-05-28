// /components/dashboard/KanbanBoard.tsx

'use client'

import { useState } from 'react'

type Task = {
  id: number
  title: string
}

export default function KanbanBoard() {
  const [todo, setTodo] = useState<Task[]>([
    {
      id: 1,
      title: 'Create AI Homepage',
    },
    {
      id: 2,
      title: 'Build Wallet UI',
    },
  ])

  const [progress, setProgress] = useState<Task[]>([
    {
      id: 3,
      title: 'Realtime Notifications',
    },
  ])

  const [done, setDone] = useState<Task[]>([
    {
      id: 4,
      title: 'Authentication Setup',
    },
  ])

  const moveTask = (
    task: Task,
    from: 'todo' | 'progress',
    to: 'progress' | 'done'
  ) => {
    if (from === 'todo') {
      setTodo(todo.filter((t) => t.id !== task.id))
      setProgress([...progress, task])
    }

    if (from === 'progress') {
      setProgress(progress.filter((t) => t.id !== task.id))
      setDone([...done, task])
    }
  }

  return (
    <div className="bg-white rounded-[30px] p-8 shadow-sm mt-8">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-black">
          Kanban Board
        </h2>

        <button className="rounded-2xl bg-black text-white px-6 py-4">
          Create Task
        </button>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* TODO */}
        <div className="rounded-3xl bg-[#f5f7fb] p-5">
          <h3 className="text-2xl font-black mb-5">
            Todo
          </h3>

          <div className="space-y-4">
            {todo.map((task) => (
              <div
                key={task.id}
                className="bg-white rounded-2xl p-5 shadow-sm"
              >
                <h4 className="font-bold">
                  {task.title}
                </h4>

                <button
                  onClick={() =>
                    moveTask(task, 'todo', 'progress')
                  }
                  className="mt-4 rounded-xl bg-black text-white px-4 py-2"
                >
                  Start
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* PROGRESS */}
        <div className="rounded-3xl bg-[#f5f7fb] p-5">
          <h3 className="text-2xl font-black mb-5">
            In Progress
          </h3>

          <div className="space-y-4">
            {progress.map((task) => (
              <div
                key={task.id}
                className="bg-white rounded-2xl p-5 shadow-sm"
              >
                <h4 className="font-bold">
                  {task.title}
                </h4>

                <button
                  onClick={() =>
                    moveTask(task, 'progress', 'done')
                  }
                  className="mt-4 rounded-xl bg-green-500 text-white px-4 py-2"
                >
                  Complete
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* DONE */}
        <div className="rounded-3xl bg-[#f5f7fb] p-5">
          <h3 className="text-2xl font-black mb-5">
            Completed
          </h3>

          <div className="space-y-4">
            {done.map((task) => (
              <div
                key={task.id}
                className="bg-white rounded-2xl p-5 shadow-sm"
              >
                <h4 className="font-bold">
                  {task.title}
                </h4>

                <p className="mt-3 text-green-500 font-semibold">
                  Completed
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
