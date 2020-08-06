import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import './App.css';

import styled, {ThemeProvider} from "styled-components";
import API from "./Components/API";
import Home from "./Components/Home";
import Favorites from "./Components/Favorites";
import Login from "./Components/Login";
import {NameContext} from "./Components/NameContext";

export default function App() {

  const [value, setvalue] = useState("Hello again")//how I was shown on youtube
  //const [state, setState] = useState("Dialga"); how I was shown in class

  return (

  <Router>  
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Login">Login</Link>
          </li>
          <li>
            <Link to="/API">PokemonAPI</Link>
          </li>
          <li>
            <Link to="/Favorites">Favorites</Link>
          </li>
        </ul>
      </nav>
      

      <Switch>
        
          <Route path="/API">
            <API />
          </Route>
          <Route path="/Login">
            <Login/>
          </Route>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/Favorites">
            <Favorites/>
          </Route>
         
          </Switch>
    </div>
  </Router>

  );
}
