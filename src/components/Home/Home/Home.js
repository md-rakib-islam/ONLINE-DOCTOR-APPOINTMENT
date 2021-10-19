import React from "react";
import Department from "../../Department/Department";
import Doctors from "../../Doctors/Doctors";
import Login from "../../Login/Login";
import Banner from "../Banner/Banner";

const Home = () => {
  return (
    <div id="home">
      <Banner></Banner>
      <Doctors></Doctors>
      <Department></Department>
    </div>
  );
};

export default Home;
