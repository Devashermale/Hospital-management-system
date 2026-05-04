import React, { useState } from 'react'
import axios from 'axios'
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
    <form onSubmit={handlesubmit} >
      <label htmlFor="full-name">full name</label>
    <input type="text" placeholder='enter your name' onChange={(e)=>setname(e.target.value)} />
    <label htmlFor="email">email</label>
    <input type="email" name="email" placeholder='enter your email' onChange={(e)=>setemail(e.target.value)} />
    <label htmlFor="gender">gender</label>
    <select onChange={(e)=>setgender(e.target.value)}>
      <option value="" disabled>choose your gender</option>
      <option>male</option>
      <option>female</option>
      <option>other</option>
    </select>
    <label htmlFor="">dieases</label>
    <input type="text" placeholder='enter a dieases' onChange={(e)=>setdieses(e.target.value)}  />
    <label htmlFor="">notes</label>
    <input type="text" placeholder=' notes for patient' onChange={(e)=>setnote(e.target.value)} />
    <button type="submit">submit</button>
    </form>

    </>
  )
}

export default PatientReg