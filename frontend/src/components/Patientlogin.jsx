import React from 'react'

function Patientlogin() {
  return (
<>
<form  className='h-screen flex items-center justify-center size-auto bg-slate-50'>
    <div className=' flex items-center justify-center'>
        <h1 className=' font-bold text-2xl text-center'>patient login</h1>
        <label htmlFor="email">Email:</label>
        <input type="email" placeholder=' patientjohn@gmail.com' />
        <label htmlFor="password">Password:</label>
        <input type="password" placeholder='password' />
    <button type="submit">Login</button>
    </div>
</form>
</>
)
}

export default Patientlogin