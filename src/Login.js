import React, { useState, useEffect } from "react";
import "./Login.css";
import Button from '@material-ui/core/Button';


function Login() {

  // constructor(props) 
  // {
  // super(props);
  // this.state = {value: ''};
  // this.handleChange = this.handleChange.bind(this);
  // this.handleSubmit = this.handleSubmit.bind(this);
  // }

  // handleChange => (event){
  //   this.setState({value: event.target.value});
  // }

  // handleSubmit => (event){
  //   this.setState({value: event.state.value});
  // }


  const [name, setName] = React.useState('Eg. Arpit')

  const submit = ()=>{
    fetch("https://stage1.uidai.gov.in/onlineekyc/getOtp/", {
    
    method: "POST",
    body: JSON.stringify({
      "uid": name,
      "txnId": "0acbaa8b-b3ae-433d-a5d2-51250ea8e970"
    }),
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
  }).then(console.log(name))
}


  function handleSubmit(e){
    e.preventDefault();
    console.log("NAME: ", {name})
  }


  return (
    <div className="login">


      <form onSubmit={handleSubmit}>
      <h1>FORM</h1>
        
        <input type="text" id="name" value={name} onChange={(e)=> setName(e.target.value)}/>
        <br/><br/>
      </form>


      {/* <div className="login__container">
        <h1>Sign-in</h1>
        <div className = "login__form">
          <h5> Aadhar Number </h5>
          <input type="number" value={this.state.value} onChange={this.handleChange} />
          <h5> OTP </h5>
          <input type="password"/>

        <div className="login__buttons"> */}
        <Button type="submit" onClick={submit}>
            SEND OTP
          </Button>
          <Button type="submit" >
            Log in Landlord
          </Button>
          <Button type="submit">
            Log in Renter
          </Button>
        </div>
    //     </div>
        

    //   </div>
    // </div>
  )};


export default Login;