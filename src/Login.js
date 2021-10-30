import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";



import Button from '@material-ui/core/Button';


function Login() {

  return (
    <div className="login">

      <div className="login__container">
        <h1>Sign-in</h1>
        <div className = "login__form">
          <h5> Aadhar Number </h5>
          <input type="numbe"/>
          <Button type="submit">
            Request OTP
          </Button>

          
          <h5> OTP </h5>
          <input type="password"/>
          <Button type="submit">
            Verify OTP
          </Button>

         
        <div className="login__buttons">
          <Link to="/Landlord">
          <Button type="submit">
            Log in Landlord
          </Button>
          </Link>
          <Link to="/Renter">
          <Button type="submit">
            Log in Renter
          </Button>
          </Link>
        </div>
        </div>
        

      </div>
    </div>
  );
}

export default Login;