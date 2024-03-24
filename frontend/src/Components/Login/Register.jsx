import React from "react";
import "../styles/AuthPage.css";
import DetailsForm from "./Details";

function Register() {
  return (
    <DetailsForm className="auth-page"
    header="Register"
    name=""
    email=""
    phone=""
    password=""/>
  );
}

export default Register;
