import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import "./Login.css";

const Login = () => {
  const {
    signInUsingGoogle,
    handleRagistration,
    handleEmailChange,
    handlePasswordChange,
    toggleLogin,
    isLogin,
    error,
  } = useAuth();

  return (
    <div className="body">
      <div className="mx-5 mt-5">
        <form onSubmit={handleRagistration}>
          <div className="row mb-3">
            <h3 className="text-primary mb-5">
              <b>Please {isLogin ? "Login" : " Register"}</b>
            </h3>
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
              Email
            </label>
            <div className="col-sm-10">
              <input
                onBlur={handleEmailChange}
                type="email"
                className="form-control"
                id="inputEmail3"
              />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
              Password
            </label>
            <div className="col-sm-10">
              <input
                onBlur={handlePasswordChange}
                type="password"
                className="form-control"
                id="inputPassword3"
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-sm-10 offset-sm-2">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  onChange={toggleLogin}
                  id="gridCheck1"
                />
                <label className="form-check-label" htmlFor="gridCheck1">
                  Already registered?
                </label>
              </div>
            </div>
          </div>
          <div className="row mb-3 text-danger">
            {" "}
            <b>{error}</b>
          </div>
          <button type="submit" className="btn btn-primary">
            {isLogin ? "Login" : "Register"}
          </button>
          <button type="button" className="btn btn-link">
            Forget Passwor?
          </button>
          <p>or</p>
          <button
            type="submit"
            className="btn btn-google"
            onClick={signInUsingGoogle}
          >
            <FontAwesomeIcon icon={faGoogle} style={{ color: "white" }} />{" "}
            Google Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
