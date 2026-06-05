import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import Layout from './components/Layout'
import ManageTask from './components/ManageTask'
import ContactApp from './components/ContactApp'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<Layout/>}/>
        <Route path='/tasks' element={<ManageTask/>}/>
        <Route path='/contact-us' element={<ContactApp/>}/>
      </Routes>
    </Router>
  </StrictMode>,
)
