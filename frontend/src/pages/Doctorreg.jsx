import React from 'react'
import { useState } from 'react'

function Doctorreg() {
    const [drname ,setdrname] = useState
  return (
    <>
       <form onClick={}>
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