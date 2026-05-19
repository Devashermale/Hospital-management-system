import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom';

function useAdmin() {
  const navigate = useNavigate();
  const adminlogin = async (email,password) =>{
    try {
      const response = await axios.post('http://localhost:5000/api/admin/login',{
        email,password
      })
      console.log(response.data)
      localStorage.setItem('adminToken',response.data.token)
      navigate('/admin/dashboard')
      return response.data;
    } catch (error) {
      console.log(error)
      throw error;
    }
    }
    return {adminlogin}
}

export default useAdmin