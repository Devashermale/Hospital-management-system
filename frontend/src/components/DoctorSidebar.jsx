import React from 'react'
import { Link } from 'react-router-dom'

function DoctorSidebar() {
  return (
    <div className=' flex items-center justify-center gap-4 bg-gray-800 text-white p-4  '>
      <Link to="/doctordash">Home</Link>
     <Link to="/patientreg">Patient Registration</Link>
    <Link to="/patient-details">Patient Details</Link>
    </div>
  )
}

export default DoctorSidebar