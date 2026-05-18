import axios from 'axios'
import React from 'react'

function useLogin() {
    try {
        const login = async (email,password) =>{
            const response = await axios.post('http://localhost:5000/api/patient/login',{
                email,password
            })
            console.log(response.data)
        }   
        return {login}
    } catch (error) {
        console.log(error)
    }
}


export default useLogin