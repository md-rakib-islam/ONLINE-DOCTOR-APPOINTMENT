import React from "react";
import "./Doctor.css";

const Doctor = ({ doctor }) => {
  const { doctor_name, company_name, description, img } = doctor;
  return (
    <div className="doctor-info img-fluid">
      <img src={img} alt="" />
      <h3>{doctor_name}</h3>
      <h5>Wort at {company_name}</h5>
      <p>{description}</p>
    </div>
  );
};

export default Doctor;
