import React from 'react'
import { useState } from 'react'
import useAppointment from '../hook/useAppointment'

function Doctorreg() {
    const [name ,setname] =useState('')
    const[email ,setemail] = useState('')
    const[password ,setpassword] =useState('')
    const[specilazation , setspecilazation] =useState('')
    const [time ,settime] = useState('')
   const {Appointment} = useAppointment()
const handlesubmit = async () => {
   await Appointment(name,email,password,specilazation,time)
}

  return (
    <>
       <form onClick={handlesubmit} className=' border-2 flex flex-col gap-4 p-2  rounded-lg shadow-md w-full max-w-md mx-auto mt-8'>
        <h1 className=' text-3xl text-center font-bold'>Doctor Registration</h1>
        <label htmlFor="" className='font-semibold'>full name</label>
          <input type="text" placeholder=' name of doctor' className=' m-2 p-2 ' onChange={(e) => setname(e.target.value)} />
          <label htmlFor="" className='font-semibold'>email</label>
          <input type="email" placeholder='doctor email' className=' m-2 p-2 ' onChange={(e) => setemail(e.target.value)} />
          <label htmlFor="" className='font-semibold'>password</label>
          <input type="password" placeholder='password' className=' m-2 p-2 ' onChange={(e) => setpassword(e.target.value)} />
          <label htmlFor="" className='font-semibold'>specilazation</label>
          <input type="text" placeholder=' specilazation' className=' m-2 p-2 ' onChange={(e) => setspecilazation(e.target.value)} />
          <label htmlFor="time">time</label>
          <input type="time" name="time" className=' m-2 p-2 ' onChange={(e) => settime(e.target.value)} />
          <button type="submit" className='bg-blue-700 text-white p-2 rounded'>submit </button>
       </form>
    </>
  )
}

export default Doctorreg