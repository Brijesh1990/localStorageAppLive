import React,{useState, useEffect} from 'react'
import Header from './Header'
import loader from '../loader.gif'
import {FaTrash,FaEdit} from 'react-icons/fa'
export default function ManageTask() {
    // create a form handeling method for manage all task in local storage
    useEffect(() => {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        console.log('Tasks from local storage:', tasks);
    }, [])

    // set loader for 1.5 seconds
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false)
        }, 1500)

        return () => clearTimeout(timer)
    }, [])

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen"> 
                <img src={loader} alt="Loading..." />
            </div>
        )
    }
    else 
    {
  return (
    <>
        <Header />
  {/* Task List */}

<section className="mt-8 px-4">
  <h2 className="text-2xl font-bold text-center mb-6">
    Manage Tasks
  </h2>

  <div className="max-w-5xl mx-auto">

    {/* Table Header - Hidden on Mobile */}
    <div className="hidden md:grid grid-cols-4 bg-indigo-600 text-white p-4 rounded-t-xl font-semibold">
      <div>Task</div>
      <div>Date</div>
      <div>Priority</div>
      <div className="text-center">Actions</div>
    </div>

    {/* Task List */}
    <div className="space-y-3 md:space-y-0">

      {JSON.parse(localStorage.getItem("tasks"))?.map((task) => (
        <div
          key={task.id}
          className="
            bg-white shadow-md rounded-xl p-4
            md:grid md:grid-cols-4 md:items-center
            md:rounded-none md:border-b
          "
        >
          {/* Task Title */}
          <div className="mb-2 md:mb-0">
            <span className="font-semibold md:hidden">Task: </span>
            {task.title}
          </div>

          {/* Date */}
          <div className="mb-2 md:mb-0">
            <span className="font-semibold md:hidden">Date: </span>
            {task.date}
          </div>

          {/* Priority */}
          <div className="mb-3 md:mb-0">
            <span className="font-semibold md:hidden">Priority: </span>

            <span
              className={`inline-block px-3 py-1 rounded-full text-sm font-medium
                ${
                  task.priority === "high"
                    ? "bg-red-100 text-red-600"
                    : task.priority === "medium"
                    ? "bg-yellow-100 text-yellow-600"
                    : "bg-green-100 text-green-600"
                }
              `}
            >
              {task.priority}
            </span>
          </div>

          {/* Actions */}
          <div className="flex gap-3 md:justify-center">
            <button
              className="bg-blue-100 text-blue-600 hover:bg-blue-200 p-2 rounded-lg transition"
            >
              <FaEdit />
            </button>

            <button
              className="bg-red-100 text-red-600 hover:bg-red-200 p-2 rounded-lg transition"
            >
              <FaTrash />
            </button>
          </div>
        </div>
      ))}

    </div>

    {/* Empty State */}
    {JSON.parse(localStorage.getItem("tasks"))?.length === 0 && (
      <div className="bg-gray-50 border rounded-xl p-8 text-center text-gray-500">
        No tasks available.
      </div>
    )}

  </div>
</section>


</>

  )
}

}