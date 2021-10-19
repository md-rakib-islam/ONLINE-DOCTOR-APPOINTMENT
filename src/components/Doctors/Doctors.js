import React, { useEffect, useState } from "react";
import Doctor from "../Home/Doctor/Doctor";
import "./Doctors.css";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    fetch("doctors.json")
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  });
  return (
    <div id="doctors" className="mt-5 mb-5">
      <h2>Our Doctors</h2>

      <div className="doctors-container">
        {doctors.map((doctor) => (
          <Doctor key={doctor.id} doctor={doctor}></Doctor>
        ))}
      </div>
    </div>
  );
};

export default Doctors;
