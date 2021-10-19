import React from "react";
import { Link } from "react-router-dom";
import error from "../../images/NotFound/404_Page.png";

const NotFound = () => {
  return (
    <div>
      <img className="img-fluid" src={error} alt="" width="600" />
      <Link className="text-decoration-none" to="/home">
        {" "}
        <h3 className="text-success">
          <b>Go Home</b>
        </h3>
      </Link>
    </div>
  );
};

export default NotFound;
