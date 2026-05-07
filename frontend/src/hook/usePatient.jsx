import React from "react";

function usePatient() {
  const Patient = async (name, email, dieases, gender, note) => {
    try {
      const res = axios.post("", {
        name: name,
        email: email,
        gender: gender,
        dieases: dieases,
        note: note,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export default usePatient;
