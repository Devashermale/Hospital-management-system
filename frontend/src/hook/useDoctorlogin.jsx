import axios from 'axios'
import React from 'react'

function useDoctorlogin() {
 const doctorlogin = async (email,password) =>{
    try {
      const response = await axios.post('http://localhost:5000/api/doctor/login',{
        email,password
      })
      console.log(response.data)
      return response.data;
    } catch (error) {
      console.log(error)
      throw error;
    }
}   
 return {doctorlogin}
}
export default useDoctorlogin