import React from "react";
import "./App.css";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Switch from "react-bootstrap/esm/Switch";
import Home from "./containers/Home";
import Signin from "./containers/Signin";
import Signup from "./containers/Signup";


function App() {
  return (
    <div className="App">
        <Router>
        <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/signin" component={Signin}></Route>
        <Route path="/signup" component={Signup}></Route>
        </Switch>
        </Router>
    </div>
  );
}

export default App;
