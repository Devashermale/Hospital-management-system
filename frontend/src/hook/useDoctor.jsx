import React from 'react'
import axios from 'axios'
function useDoctor() {

    const Doctor = async () => {
        try {
            const res = axios.post('',{
                
            })
            return res.data
        } catch (error) {
            console.error('Error fetching doctor data:', error);
        }
    }
  return 
}

export default useDoctor