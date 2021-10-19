import React from "react";
import { useParams } from "react-router";
import useAuth from "../../Hooks/useAuth";
import "./Appoinment.css";

const Appointment = () => {
  const { doctorId } = useParams();
  const { user } = useAuth();
  return (
    <div className="text">
      <h2>
        Congratulation{" "}
        <b>
          <span style={{ color: "green" }}>{user.displayName}</span>
        </b>
        . You have appoinmented. Your Doctor id is:{" "}
        <span className="text-danger">
          <b>{doctorId}</b>
        </span>{" "}
        <br /> Please show your doctor id when you visit our hospital.
      </h2>
    </div>
  );
};

export default Appointment;
