import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <>
    <nav className=' flex items-center justify-center gap-4 bg-gray-800 text-white p-4'>
    <Link to="/patientdash" className=' p-2'>Home</Link>
    <Link to="/patientreg"  className=' p-2'>Registration</Link>
    <Link to="/appointmentshow"  className=' p-2'>Show Appointments</Link>
    <button className=' bg-red-700 p-2 rounded'>Logout</button>
    </nav>
   
    </>
  )
}

export default Sidebar