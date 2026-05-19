import axios from 'axios'
import React from 'react'

function useAdmin() {
  const adminlogin = async (email,password) =>{
    try {
      const response = await axios.post('http://localhost:5000/api/admin/login',{
        email,password
      })
      console.log(response.data)
      return response.data;
    } catch (error) {
      console.log(error)
      throw error;
    }
    }
    return {adminlogin}
}

export default useAdmin