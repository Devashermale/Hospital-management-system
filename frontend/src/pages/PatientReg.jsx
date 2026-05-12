import React, { useState } from 'react'
import usePatient from '../hook/usePatient'

function PatientReg() {
const[name ,setname] =useState('')
const[email ,setemail] =useState('')
const[gender ,setgender]= useState('')
const[dieases ,setdieses]= useState('')
const [note ,setnote] =useState('')
const {Patient} = usePatient()
const handlesubmit = async (e) => {
  e.preventDefault()
 await Patient(name,email,gender,dieases,note)
}
  return (
    <>
    <form onSubmit={handlesubmit} className='border-2 border-gray-300 p-4 rounded-lg shadow-md w-full max-w-md mx-auto mt-8 ' >
      <h1 className=' text-3xl font-bold text-center'>patient registration</h1>
      <label htmlFor="full-name" className=' font-semibold '>full name</label>
    <input type="text" placeholder='enter your name' onChange={(e)=>setname(e.target.value)}  className=' w-full m-2 p-2 '/>
    <label htmlFor="email" className=' font-semibold '>email</label>
    <input type="email" name="email" placeholder='enter your email' onChange={(e)=>setemail(e.target.value)}  className=' w-full m-2 p-2 '/>
    <label htmlFor="gender" className=' font-semibold '>gender</label>
    <select onChange={(e)=>setgender(e.target.value)}  className=' w-full m-2 p-2 '>
      <option value="" disabled>choose your gender</option>
      <option>male</option>
      <option>female</option>
      <option>other</option>
    </select>
    <label htmlFor="dieases" className=' font-semibold '>dieases</label>
    <textarea type="text" placeholder='enter a dieases' onChange={(e)=>setdieses(e.target.value)}  className=' w-full m-2 p-2 '/>
    <label htmlFor="notes" className=' font-semibold '>notes</label>
    <textarea type="text" placeholder=' notes for patient' onChange={(e)=>setnote(e.target.value)}  className=' w-full m-2 p-2 '/>
    <button type="submit" className=' bg-blue-700 w-full text-white p-2 rounded'>submit</button>
    </form>

    </>
  )
}

export default PatientReg