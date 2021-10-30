import React, { useState } from "react";
import "./Login.css";


import Button from '@material-ui/core/Button';


function Login() {

  return (
    <div className="login">

      <div className="login__container">
        <h1>Sign-in</h1>
        <div className = "login__form">
          <h5> Aadhar Number </h5>
          <input type="text"/>

          
          <h5> OTP </h5>
          <input type="password"/>

         
        <div className="login__buttons">
          <Button type="submit">
            Log in Landlord
          </Button>
          <Button type="submit">
            Log in Renter
          </Button>
        </div>
        </div>
        

      </div>
    </div>
  );
}

export default Login;