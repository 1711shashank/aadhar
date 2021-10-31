import React from 'react';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import "./Home.css";
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import banner1 from "./images/banner1.jpg";
import banner2 from "./images/banner2.png";
import banner3 from "./images/banner3.jpg";

const images = [banner1, banner2,banner3];

const zoomOutProperties = {
    duration: 4000,
    transitionDuration: 400,
    infinite: true,
    indicators: true,
    scale: 0.4,
    arrows: true
  };
  
  const Slideshow = () => {
    return (
      <div className="slide-container">
        <Zoom {...zoomOutProperties}>
          {images.map((each, index) => (
            <img key={index} style={{ width: "100%" }} src={each} />
          ))}
        </Zoom>
      </div>
    );
  };


function Home() {
    return (
        <div className="home">
            <div className="header">
                <div className="header__left">
                    <img src="https://uidai.gov.in/images/logo/aadhaar_english_logo.svg" alt="" />           
                    <img src="https://uidai.gov.in/images/logo/uidai_english_logo.svg" alt="" />
                </div>
                <div className="header__right">
                    <Link to="/Login">
                        <Button className="header__logIn__Button" variant="contained">
                            Log in
                        </Button>
                    </Link>
                </div>
            </div>
            <Slideshow />

<footer>
        <div className="content">
          <div className="left box" style={{fontSize: '18px'}}>
            <div className="upper">
              <div className="topic">Aadhar</div><p />
              <br />
              <div><a href="#">About</a></div><br />
              <div><a href="#">My Govt</a></div><br />
              <div><a href="#">Terms and Condition</a></div><br />
              <div><a href="#">Privacy Policy</a></div><br />
              <div><a href="#">Hyperlinking Policy</a></div>
              <br/><br/>
              <b><div style={{fontSize:"20px",  fontWeight: "200px", color:"#060c38", fontSize:"22px"}}>Follow Us</div></b>
              <div className="media-icons">
                <a href="https://www.facebook.com/AadhaarOfficial/"><i className="fab fa-facebook-f" /></a>
                <a href="https://www.instagram.com/aadhaar_official/?hl=en"><i className="fab fa-instagram" /></a>
                <a href="https://twitter.com/UIDAI"><i className="fab fa-twitter" /></a>
                <a href="https://www.linkedin.com/company/unique-identification-authority-of-india-uidai-/"><i className="fab fa-linkedin-in" /></a>
              </div>

            </div>
            <div className="lower">
              <div className="topic" />
              <div className="phone">
                <a href="#"><i className /></a>
              </div>
              <div className="email">
                <a href="#"><i className /></a>
              </div>
            </div>
          </div>
          <div className="middle box" style={{fontSize: '18px'}}>
          <div class="topic">Website Policy</div>
            <br />
            <div><a href="#">Copyright Policy</a></div>
            <br />
            <div><a href="#">Disclaimer</a></div>
            <br />
            <div><a href="#">Help</a></div>
            <br/>
            <div><a href="#">SiteMap</a></div>
          </div>
          <div className="right box">
            <div className="topic">UIDAI Head Office
              <br /><br/>
              <p style={{fontSize: '16px'}}>Unique Identification Authority of India

Government of India (GoI)

Bangla Sahib Road, Behind Kali Mandir, Gole Market,

New Delhi - 110001

<br/><br/>
Email: help[@]uidai[.]gov[.]in
<br/>
Toll Free: 1947



<br/>
              </p>
              <br /><p style={{fontSize: '25px', color: '#060c38'}}>
                Contact Us</p>
            </div>
            <form action="#">
              <input type="text" placeholder="Enter email address" />
              <input type="submit" name defaultValue="Send" />
             
            </form>
          </div>
        </div>
        <div className="bottom" style={{fontSize: '15px'}}>
        <p style={{textAlign:"center"}}>Copyright © 2021 Unique Identification Authority of India All Rights Reserved</p>
        </div>
      </footer>


        </div>
    )
}

export default Home;
