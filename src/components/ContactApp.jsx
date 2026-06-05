import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import Header from './Header';
 import { ToastContainer, toast } from 'react-toastify';
export default function ContactApp() {
// create a desructured state for add task via form 
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')
    const navigate=useNavigate();
//create a variables to stored sending email config
const YOUR_SERVICE_ID="service_q9b0xoo";
const YOUR_TEMPLATE_ID="template_lsydxhd";
const YOUR_PUBLIC_KEY="I3OKeIkWPY2_W0BsP";

//create a function of form handeling to add all data in local storage
    const handleSubmit = (e) => {
        e.preventDefault();
        const newContact = {
            id: Date.now(),
            name: name, 
            email:email,
            phone:phone,
            subject:subject,
            message:message
        };
  
        // for send email set email js method 
      emailjs.sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, e.target, 
        YOUR_PUBLIC_KEY)
        // Add the new task to local storage
        const existingTasks = JSON.parse(localStorage.getItem('contacts')) || [];
        existingTasks.push(newContact);
        localStorage.setItem('contacts', JSON.stringify(existingTasks));
        // Show success toast notification
        toast.success('Thanks for contact with us Will get in touch with you soon!');
        navigate('/contact-us');
        // Clear the form
        setName('');
        setEmail('');
        setPhone('');
        setSubject('');
        setMessage('');
    };

  return (
   <>
   <Header/>
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
        <h2 className="text-2xl font-semibold mb-4">Contact with Us</h2>

        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
          <div className="flex gap-3">
            <input
              type="text" name="name" value={name} onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
        
          </div>

           <div className="flex gap-3">
            <input
              type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          
           <div className="flex gap-3">
            <input
              type="text" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)}
              placeholder="Phone"
              className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="flex gap-3">
            <select
              name="subject" value={subject} onChange={(e) => setSubject(e.target.value)}
              className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              
              <option value="">Select Subjects</option>
              <option value="24x7 support">24x7 support</option>
              <option value="customer care numbers">Customers care contact</option>
              <option value="return">Return products</option>
            </select>       
            </div>
            
          <input
            type="text" name="message" value={message} onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter Message..."
            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg transition"
          >
            Send
          </button>

          
          <button
            type="reset"
            className="bg-red-600 hover:bg-red-400 text-white px-6 py-3 rounded-lg transition"
          >
            Reset
          </button>
        </form>
      </section>

    </div>
  </main>
</>
  )
}
