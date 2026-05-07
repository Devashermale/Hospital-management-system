import React, { useState } from 'react'
import useAppointment from '../hook/useAppointment'

function Appointmentreg() {
    const [name ,setname] = useState('')
    const [email ,setemail] = useState('')
    const[doctor , setdoctor] = useState('')
    const[date ,setdate] = useState('')
    const[time ,settime] =useState('')
    const {patient:Patientuser} = useAppointment()
    const handlesubmit = async () => {
        const success = await Patientuser(name,email,doctor,date,time)
    }
  return (
    <form onClick={handlesubmit}>
        <label htmlFor="name"> full name</label>
        <input type="text" placeholder='enter your name' />
        <label htmlFor="email">email</label>
     <input type="email" placeholder='enter your email' />
     <label htmlFor="doctor">doctor</label>
      <input type="text" placeholder='enter doctor name'  />
      <label htmlFor="date">date</label>
     <input type="date" placeholder=' ' />
     <label htmlFor="time">time</label>
     <input type="time"  />
     <button type="submit">submit</button>
    </form>
  )
}

export default Appointmentreg