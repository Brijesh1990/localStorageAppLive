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

<main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

    {/* Left Side - GIF/Image */}
    <section className="flex justify-center order-1 lg:order-none">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_LpHIZup0PurWcUdNi89lw3spUtvGWD658Q&s"
        alt="Todo Animation"
        className="w-full max-w-sm sm:max-w-md lg:max-w-lg rounded-2xl shadow-xl object-cover"
      />
    </section>

    {/* Right Side - Form */}
    <section className="bg-white rounded-2xl shadow-lg p-5 sm:p-6 lg:p-8">
      <ToastContainer />

      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
        Add New Task
      </h2>

      <form className="space-y-4" onSubmit={handleSubmit}>

        {/* Task Title */}
        <input
          type="text"
          name="taskTitle"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
          placeholder="Task Title"
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        {/* Task Date */}
        <input
          type="date"
          name="taskDate"
          value={taskDate}
          onChange={(e) => setTaskDate(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        {/* Priority */}
        <select
          name="taskPriority"
          value={taskPriority}
          onChange={(e) => setTaskPriority(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="">Select Priority</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>

        {/* Task Details */}
        <textarea
          name="taskDetails"
          value={taskDetails}
          onChange={(e) => setTaskDetails(e.target.value)}
          placeholder="Enter task details..."
          rows={4}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 rounded-lg transition-all duration-300"
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
