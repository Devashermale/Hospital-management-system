import React from 'react'
import { useState } from 'react'
import useAppointment from '../hook/useAppointment'

function Doctorreg() {
    const [name ,setname] =useState('')
    const[email ,setemail] = useState('')
    const[password ,setpassword] =useState('')
    const[specilazation , setspecilazation] =useState('')
   const {Appointment} = useAppointment()
const handlesubmit = async (name ,email,password,specilazation) => {
  const success = await Appointment(name,email,password,specilazation)
}

  return (
    <>
       <form onClick={handlesubmit}>
        <label htmlFor="">full name</label>
          <input type="text" placeholder=' name of doctor' />
          <label htmlFor="">email</label>
          <input type="email" placeholder='doctor email' />
          <label htmlFor="">password</label>
          <input type="password" placeholder='password' />
          <label htmlFor="">specilazation</label>
          <input type="text" placeholder=' specilazation' />
          <button type="submit">submit </button>
       </form>
    </>
  )
}

export default Doctorreg