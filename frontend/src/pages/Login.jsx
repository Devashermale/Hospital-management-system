import React, { useState } from 'react'
import useLogin from '../hook/useLogin'

function Login() {
const [email ,setemail] = useState('')
const [password, setpassword] = useState('')
const {login} = useLogin()
const handleSubmit = async (e) =>{
    e.preventDefault()
    await login(email,password)
}
  return (
    <form onSubmit={handleSubmit} className=''>
      <div className='w-full max-w-md mx-auto mt-20 p-8 border border-gray-300 rounded-lg shadow-lg flex flex-col gap-4 '>
      <h1 className=' text-3xl font-bold text-center'> patient Login</h1>
      <label htmlFor="email" className=' font-bold text-2xl'>email</label>
      <input type="email" placeholder=' john@gmail.com' className='p-2 m-2 focus:bg-blue-200 ' onChange={(e)=>setemail(e.target.value)} />
      <label htmlFor="password" className=' font-bold text-2xl'>password</label>
      <input type="password" placeholder=' ********' className='p-2 m-2 focus:bg-blue-200' onChange={(e)=>setpassword(e.target.value)} />
      <button type='submit' className='bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600'>
        Login
      </button>
      </div>
    </form>
  )
}

export default Login