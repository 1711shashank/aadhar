import React from 'react';
import { Link } from "react-router-dom";

import Button from '@material-ui/core/Button';
import "./Home.css";

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
            
        </div>
    )
}

export default Home;
