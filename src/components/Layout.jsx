import React,{useState} from 'react'
import Header from './Header'
import AddTask from './AddTask'
import loader from '../loader.gif'
export default function Layout() {
// create a loader after 3 seconds
const [loading, setLoading] = useState(true)
setTimeout(() => {
setLoading(false)
}, 1500)
if (loading) {
return (

<div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50">
  <img
    src={loader}
    alt="Loading..."
    className="w-150 h-150 sm:w-24 sm:h-24 md:w-32 md:h-32 object-contain"
  />

  <p className="mt-4 text-gray-600 text-3xl  sm:text-2xl animate-pulse">
    Loading...
  </p>
</div>

)
}
else 
{
return (
<div>
<Header />
<AddTask />
</div>
)
}
}


