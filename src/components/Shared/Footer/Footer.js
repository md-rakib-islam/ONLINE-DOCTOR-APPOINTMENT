import {
  faFacebookSquare,
  faInstagramSquare,
  faTwitterSquare,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faMapMarkedAlt,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="footer-container">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="left-container text-start">
                <h1 className="text-left">Online Doctors Appoinment</h1>
                <br />
                <h4>Connect With Us</h4>
                <div className="icons-container d-flex text-center ">
                  <div className="icon-inst">
                    <FontAwesomeIcon icon={faInstagramSquare} />
                  </div>
                  <div className="icon-twt">
                    <FontAwesomeIcon icon={faTwitterSquare} />
                  </div>
                  <div className="icon-youtube">
                    <FontAwesomeIcon icon={faYoutube} />
                  </div>
                  <div className="icon-facebook">
                    <FontAwesomeIcon icon={faFacebookSquare} />
                  </div>
                </div>
                <p className=" mt-4 ">
                  <small>Health is wealth</small>
                </p>

                <p className="text-center mt-5">
                  <small>
                    Copyright © 2021 All rights reserved | This template is made
                    with by Colorlib
                  </small>
                </p>
              </div>
            </div>
            <div className="col-md-2">
              <div className="footer-menu-container">
                <ul className="footer-menu">
                  <NavLink to="/home">
                    <li className="footer-menu">Home</li>
                  </NavLink>
                  <NavLink to="/about">
                    <li className="footer-menu">About us</li>
                  </NavLink>
                  <NavLink to="/doctors">
                    <li className="footer-menu">Doctors</li>
                  </NavLink>
                  <NavLink to="/department">
                    <li className="footer-menu">Our Department</li>
                  </NavLink>
                  <NavLink to="/contact">
                    <li className="footer-menu">Contact us</li>
                  </NavLink>
                </ul>
              </div>
            </div>
            <div className="col-md-5">
              <div className="right-footer-container">
                <h3>Sign up for subscrib</h3>
                <input
                  className="footer-input"
                  type="text"
                  placeholder="Enter Email"
                />
                <div className="phone d-flex align-items-center justify-content-center mt-4">
                  <div className="foter-phone-icon">
                    <FontAwesomeIcon className="mr-2" icon={faPhoneVolume} />
                  </div>
                  <div>
                    <h5>+8801704404410</h5>
                  </div>
                </div>
                <div className="map d-flex  align-items-center justify-content-center">
                  <div className="foter-phone-icon">
                    <FontAwesomeIcon className="mr-2" icon={faMapMarkedAlt} />
                  </div>
                  <div>
                    <p>
                      <small>
                        1 No Ideal Road, Konapara, Demra, Dhaka-1361
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
