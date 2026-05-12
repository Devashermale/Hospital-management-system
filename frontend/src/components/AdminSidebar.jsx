import React from 'react'

function AdminSidebar() {
  return (
    <div>
        analytics 
        drreg 
        dr avalability 
        patient details  
        <Link to="/analytics">Analytics</Link>
        <Link to="/drreg">Doctor Registration</Link>
        <Link to="/dravailability">Doctor Availability</Link>
        <Link to="/patientdetails">Patient Details</Link>
    </div>
  )
}

export default AdminSidebar