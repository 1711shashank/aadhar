import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from './Home';
import Login from './Login';
import Landlord from './Landlord';
import Renter from './Renter';


function App() {
  return (

    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/Landlord">
            <Landlord/>
          </Route>
          <Route path="/Renter">
            <Renter/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>


   
  );
}

export default App;
