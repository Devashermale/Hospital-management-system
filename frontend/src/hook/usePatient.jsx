import axios from "axios";
import React from "react";

function usePatient() {
  const patient = async (name, email, dieases, gender, note) => {
    try {
      const res = await axios.post("http://localhost:5000/api/patientrecord/patient", {
        name: name,
        email: email,
        gender: gender,
        dieases: dieases,
        note: note,
      });
      return res.data
    } catch (error) {
      console.log(error);
    }
  };
  return {patient}
}

export default usePatient;
