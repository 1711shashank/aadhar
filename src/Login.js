import React from "react";
import "./Login.css";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

function Login() {
  var 
  const [aadharNumber, setAadharNumber] = React.useState("");
  const [OTP, setOTP] = React.useState("");

  const submit = () => {
    fetch("https://stage1.uidai.gov.in/onlineekyc/getOtp/", {
      method: "POST",
      body: JSON.stringify({
        uid: aadharNumber,
        txnId: "0acbaa8b-b3ae-433d-a5d2-51250ea8e970",
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then(console.log(aadharNumber));
  };

  const verifyOTP = () => {
    fetch("https://stage1.uidai.gov.in/onlineekyc/getAuth/", {
      method: "POST",
      body: JSON.stringify({
        uid: aadharNumber,
        txnId: "0acbaa8b-b3ae-433d-a5d2-51250ea8e970",
        otp: OTP,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then(response=>response.json())
    .then(data=>{ console.log(data); 
      if(data.status == "y" && data.errCode == null){
        
      } else {
        data.errCode
      }
    })
  };

  return (
    <div className="login">
      <div className="login__container">
        <h1>Sign-in</h1>
        <div className="login__form">
          <div className="login__form__ID">
            <input
              type="number"
              id="aadharNumber"
              placeholder="Enter aadhar number"
              value={aadharNumber}
              onChange={(e) => setAadharNumber(e.target.value)}
            />
            <Button type="submit" onClick={submit}>
              Log in with OTP
            </Button>
          </div>
          <div className="login__form__OTP">
            <input
              type="number"
              placeholder="Enter OTP"
              id="OTP"
              value={OTP}
              onChange={(e) => setOTP(e.target.value)}
            />
            <Button type="submit" onClick={verifyOTP}>
              verify OTP
            </Button>
          </div>

          <div className="login__buttons">
            <Link to="/Landlord">
              <Button type="submit">Log in Landlord</Button>
            </Link>
            <Link to="/Renter">
              <Button type="submit">Log in Renter</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
