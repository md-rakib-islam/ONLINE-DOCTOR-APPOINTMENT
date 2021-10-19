import React from "react";
import { Link } from "react-router-dom";
import "./Doctor.css";

const Doctor = ({ doctor }) => {
  const { id, doctor_name, company_name, description, img } = doctor;
  return (
    <div className="doctor-info img-fluid pb-3">
      <img src={img} alt="" />
      <h3>{doctor_name}</h3>
      <h5>Wort at {company_name}</h5>
      <p>{description}</p>
      <Link to={`/appointment/${id}`}>
        <button className="btn ">Appointment</button>
      </Link>
    </div>
  );
};

export default Doctor;
