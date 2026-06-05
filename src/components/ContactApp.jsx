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
 
<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

    {/* Left Side Image */}
    <section className="flex justify-center">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_LpHIZup0PurWcUdNi89lw3spUtvGWD658Q&s"
        alt="Contact Us"
        className="w-full max-w-sm sm:max-w-md lg:max-w-lg rounded-3xl shadow-xl object-cover"
      />
    </section>

    {/* Right Side Form */}
    <section className="bg-white shadow-xl rounded-3xl p-6 sm:p-8">
      <ToastContainer />

      <div className="mb-6">
        <h2 className="text-3xl font-bold text-gray-800">
          Contact Us
        </h2>
        <p className="text-gray-500 mt-2">
          We'd love to hear from you. Send us a message.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">

        {/* Name */}
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name"
          className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
        />

        {/* Email & Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          />

          <input
            type="tel"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone Number"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          />
        </div>

        {/* Subject */}
        <select
          name="subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
        >
          <option value="">Select Subject</option>
          <option value="24x7 support">24x7 Support</option>
          <option value="customer care numbers">
            Customer Care Contact
          </option>
          <option value="return">Return Products</option>
        </select>

        {/* Message */}
        <textarea
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={5}
          placeholder="Enter your message..."
          className="w-full border border-gray-300 rounded-xl px-4 py-3 resize-none focus:ring-2 focus:ring-indigo-500 focus:outline-none"
        />

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 pt-2">

          <button
            type="submit"
            className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-medium transition-all"
          >
            Send Message
          </button>

          <button
            type="reset"
            className="flex-1 bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl font-medium transition-all"
          >
            Reset Form
          </button>

        </div>

      </form>
    </section>

  </div>
</main>


</>
  )
}
