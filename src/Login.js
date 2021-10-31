import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";


function Login() {
  const [aadharNumber, setAadharNumber] = React.useState("");
  const [OTP, setOTP] = React.useState("");
  const [disable, setDisable] = React.useState(true);

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
    }).then(response => response.json())
      .then(data => {
        console.log(data);
        if (data.status === "y" && data.errCode === null) {
          console.log("RUNNING")
          setDisable(false)

        } else {
          console.log("RUNNING2")
          // data.errCode
        }
      })
  };

  return (
    <div className="login">
      <div className="login__container">
        <h1>Sign-in</h1>
        <div className="login__form">
          <div className="login__form__ID">
            <input className="input" 
              type="number"
              id="aadharNumber"
              placeholder="Enter aadhar number"
              value={aadharNumber}
              onChange={(e) => setAadharNumber(e.target.value)}
            />
            <button className="button1" type="submit" onClick={submit}>
              Generate OTP
            </button>
          </div>
          <div className="login__form__OTP">
            <input className="input" style={{marginTop:"12px", marginLeft:"2px"}}
              type="number"
              placeholder="Enter OTP"
              id="OTP"
              value={OTP}
              onChange={(e) => setOTP(e.target.value)}
            />
            <button className="button1" type="submit" onClick={verifyOTP}>
              verify OTP
            </button>
          </div>

          <div className="login__buttons">
            <Link to="/User">
              <button className="button" style={{marginTop:"50px"}} type="submit" disabled={disable} onClick={verifyOTP}>Log in Landlord</button>
            </Link>   
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
