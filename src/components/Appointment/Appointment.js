import React from "react";
import { useParams } from "react-router";

const Appointment = () => {
  const { doctorId } = useParams();
  return (
    <div>
      <h2>THis is Appointment {doctorId}</h2>
    </div>
  );
};

export default Appointment;
