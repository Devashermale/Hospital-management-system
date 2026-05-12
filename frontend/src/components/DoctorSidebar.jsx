import React from 'react'

function DoctorSidebar() {
  return (
    <div>
        patient reg
        Appointment details 
     patient details 
     avalability 
     <Link to="/patient-reg">Patient Registration</Link>
      <Link to="/appointment-details">Appointment Details</Link>
      <Link to="/patient-details">Patient Details</Link>
      <Link to="/availability">Availability</Link>
    </div>
  )
}

export default DoctorSidebar