import React, { useState } from 'react'
import useLogin from '../hook/useLogin'

function Login() {
const [email ,setemail] = useState('')
const [password, setpassword] = useState('')
const [role, setRole] = useState('')
const {login} = useLogin()
const handleSubmit = async (e) =>{
    e.preventDefault()
    await login(email,password,role)
}
  return (
    <form onSubmit={handleSubmit} className=''>
     
      <div className='w-full max-w-md mx-auto mt-20 p-8 border border-gray-300 rounded-lg shadow-lg flex flex-col gap-4 '>
      <h1 className=' text-3xl font-bold text-center'>Login</h1>
      <select  onChange={(e)=>setRole(e.target.value)} className=''>
        <option value="">Select Role</option>
        <option value="admin">Admin</option>
        <option value="patient">Patient</option>
        <option value="doctor">Doctor</option>
      </select>
      <label htmlFor="email">email</label>
      <input type="email" placeholder=' john@gmail.com' onChange={(e)=>setemail(e.target.value)} />
      <label htmlFor="password">password</label>
      <input type="password" placeholder=' ********' onChange={(e)=>setpassword(e.target.value)} />
      <button type='submit'>Login</button>
      </div>
    </form>
  )
}

export default Login