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
  <section className="mt-6">
    <h2 className="text-xl font-semibold mb-4 text-center">Manage Tasks</h2>
    <div className="space-y-3 w-150 max-w-2xl mx-auto">
         
         {/* add task label */}
            <div className="bg-indigo-600 text-white p-3 rounded-lg text-center font-medium text-2xl flex items-center justify-between">
                <label className="ms-5">Your Tasks</label>
                <label className="ms-5">Date</label>
                <label className="ms-5">Priority</label>
                
            </div>

       {/*create a map function to display tasks */}
       {JSON.parse(localStorage.getItem('tasks'))?.map((task) => (
        <div className="bg-white p-4 rounded-lg shadow flex items-center justify-between" key={task.id}>
          
          <div className="gap-4 text-md flex items-center justify-between">
          <span>{task.title}</span>
          <span>{task.date}</span>
          <span>{task.priority}</span>
            </div>

          <div className="flex gap-2">
              <button className="text-red-500 hover:text-red-700">
            <FaTrash />
          </button>
          <button className="text-blue-500 hover:text-blue-700">
            <FaEdit />
          </button>
        </div>
      </div>
         ))}

    </div>
  </section>
</>

  )
}

}