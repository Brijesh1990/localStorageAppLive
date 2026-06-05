import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
 import { ToastContainer, toast } from 'react-toastify';
export default function AddTask() {
// create a desructured state for add task via form 
    const [taskTitle, setTaskTitle] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [taskPriority, setTaskPriority] = useState('')
    const [taskDetails, setTaskDetails] = useState('')
    const navigate=useNavigate();
//create a function of form handeling to add all data in local storage
    const handleSubmit = (e) => {
        e.preventDefault();
        const newTask = {
            id: Date.now(),
            title: taskTitle, 
            date: taskDate,
            priority: taskPriority,
            details: taskDetails
        };

        // Add the new task to local storage
        const existingTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        existingTasks.push(newTask);

        localStorage.setItem('tasks', JSON.stringify(existingTasks));
        // Show success toast notification
        toast.success('Task added successfully!');
        navigate('/tasks');
        // Clear the form
        setTaskTitle('');
        setTaskDate('');
        setTaskPriority('');
        setTaskDetails('');
    };

  return (
   <>
  {/* Main Content */}
  <main className="max-w-6xl mx-auto p-4 sm:p-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-180 mx-auto mt-10">

      {/* Left Grid - Animated GIF */}
      <section className="flex justify-center">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_LpHIZup0PurWcUdNi89lw3spUtvGWD658Q&s"
          alt="Todo Animation"
          className="w-full max-w-md rounded-2xl shadow-lg"
        />
      </section>

      {/* Right Grid - Add Task Card */}
      <section className="bg-white rounded-xl shadow-md p-5">
        <ToastContainer />
        <h2 className="text-2xl font-semibold mb-4">Add New Task</h2>

        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
          <div className="flex gap-3">
            <input
              type="text" name="taskTitle" value={taskTitle} onChange={(e) => setTaskTitle(e.target.value)}
              placeholder="Task Title"
              className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
        
          </div>

          <div className="flex gap-3">
              <input
              type="date" name="taskDate" value={taskDate} onChange={(e) => setTaskDate(e.target.value)}
               className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>

          <div className="flex gap-3">
            <select
              name="taskPriority" value={taskPriority} onChange={(e) => setTaskPriority(e.target.value)}
              className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              
              <option value="">Select Priority</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>       
            </div>
            
          <input
            type="text" name="taskDetails" value={taskDetails} onChange={(e) => setTaskDetails(e.target.value)}
            placeholder="Enter task details..."
            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg transition"
          >
            Add Task
          </button>
        </form>
      </section>

    </div>
  </main>
</>
  )
}
