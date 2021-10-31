import React from "react";
import "./Login.css";
import zipTargetFiles from "../node_modules/jszip"
import { Link } from "react-router-dom";

// aadharNumber = 999989525451
function User() {
  var base64 = require('file-base64');
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




    
    const downloadfile = () => {
        fetch("https://stage1.uidai.gov.in/eAadhaarService/api/downloadOfflineEkyc", {
          method: "POST",
          body: JSON.stringify({
            txnNumber: "0acbaa8b-b3ae-433d-a5d2-51250ea8e970",
            otp: OTP,
            shareCode: "4567",
            uid: aadharNumber,
           }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }).then(response => response.json())
        .then(data => {

          
          if (data.status === "Success") {
            console.log("correct otp")
            console.log(data.eKycXML);
            

            var fs = require("fs");
            var base64String = data.eKycXML ;
            fs.writeFile("package1.zip", base64String,{encoding:'base64'}, function(err){
                if(err){
                    console.log(err);
                }else{
                    console.log("Working"); 

                }
            })   
          } else {
            console.log("incorrect otp")
            // console.log(data.eKycXML);
            

            // data.errCode
          }
        })
      };


    return (
        <div>
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
            <button className="button1" type="submit" onClick={downloadfile}>
              Download e-KYC File
            </button>
          </div>

         
          
        </div>
      </div>
            
            
        </div>
    )
}

export default User;
