import React from 'react'
import axios from 'axios'
function useDoctor() {

    const Doctor = async (name, email, password, specilazation, time  ) => {
        try {
            const res = axios.post('',{
              name: name,
              email: email,
              password: password,
              specilazation: specilazation,
              time: time  
            })
            return res.data
        } catch (error) {
            console.error('Error fetching doctor data:', error);
        }
    }
  return 
}

export default useDoctor