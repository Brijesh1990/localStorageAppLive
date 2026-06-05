import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  // create an destructuring for total count task
  const[tasks,setTasks]=useState([0]);
   useEffect(() => {
          const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
          console.log('Tasks from local storage:', tasks);
      }, [tasks])

  return (
    <header className="bg-indigo-600 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4">
        {/* Top Bar */}
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <h1 className="text-xl font-bold">ToDo App</h1>

          {/* Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col gap-1"
            aria-label="Toggle Menu"
          >
            <span
              className={`w-6 h-0.5 bg-white transition-all ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-white transition-all ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-white transition-all ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6">
            <Link to="/" className="hover:text-gray-200">
              Home
            </Link>
            <Link to="/tasks" className="hover:text-gray-200">
              Tasks
            </Link>
            <Link to="#" className="hover:text-gray-200">
              Total Task <span className="bg-red-600 text-white p-2 rounded-full ms-2">
               {JSON.parse(localStorage.getItem('tasks'))?.length || 0} 
              </span> 
            </Link>
              <Link to="/contact-us" className="hover:text-gray-200">
              Contact Us 
            </Link>
          </nav>
        </div>

        {/* Mobile Navigation */}
        <nav
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-60 py-3" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-3">
            <Link
              to="/"
              className="hover:text-gray-200"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>

            <Link
              to="/tasks"
              className="hover:text-gray-200"
              onClick={() => setIsOpen(false)}
            >
              Tasks
            </Link>

            <Link
              to="/completed"
              className="hover:text-gray-200"
              onClick={() => setIsOpen(false)}
            >
              Completed
            </Link>

            <Link
              to="/profile"
              className="hover:text-gray-200"
              onClick={() => setIsOpen(false)}
            >
              Profile
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}