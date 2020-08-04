import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import './App.css';

import styled, {ThemeProvider} from "styled-components";
import API from "./Components/API";
import Home from "./Components/Home";
import Todo from "./Components/Todo";
import {NameContext} from "./Components/NameContext";

export default function App() {
  return (

<Router>  
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/API">API</Link>
          </li>
          <li>
            <Link to="/todo">Todo</Link>
          </li>
        </ul>
      </nav>
      

      <Switch>
        <NameContext.Provider value="Example">
          <Route path="/API">
            <API />
          </Route>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/todo">
            <Todo/>
          </Route>
          </NameContext.Provider>
          </Switch>
    </div>
  </Router>

  );
}
