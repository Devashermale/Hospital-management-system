import React from 'react'
import { Link } from 'react-router-dom'

function AdminSidebar() {
  return (
    <div className=' flex items-center justify-center gap-7'>
       
        <Link to="/analytics">Analytics</Link>
        <Link to="/drreg">Doctor Registration</Link>
        <Link to="/doctor-details">Doctor Details</Link>
        <Link to="/patient-details">Patient Details</Link>
    </div>
  )
}

export default AdminSidebar