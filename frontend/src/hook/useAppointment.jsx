import React from "react";

function useAppointment() {
    
  const Appointment = async (name,email,doctor,date,time) => {
    try {
      const res = await axios.post("",{
        name: name,
        email: email,
        doctor: doctor,
        date: date,
        time: time,
      });
      return res.data
    } catch (error) {
        console.error(error)
    }
  };
  return {Appointment}
}

export default useAppointment;
