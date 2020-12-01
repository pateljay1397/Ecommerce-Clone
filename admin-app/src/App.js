import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Switch from "react-bootstrap/esm/Switch";
import Home from "./containers/Home";
import Signin from "./containers/Signin";
import Signup from "./containers/Signup";
import PrivateRoute from "./components/HOC/PrivateRoute";
import { useDispatch, useSelector } from "react-redux";
import { isUserLoggedIn } from "./redux/actions";
import Products from "./containers/Products";
import Orders from "./containers/Orders";

function App() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());
    }
  }, []);
  return (
    <div className="App">
      <Router>
        <Switch>
          <PrivateRoute path="/" exact component={Home} />
          <PrivateRoute path="/products" component={Products} />
          <PrivateRoute path="/orders" component={Orders} />
          <Route path="/signin" component={Signin}></Route>
          <Route path="/signup" component={Signup}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
