import React from "react";
import { Navigate, Route } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      component={(props) => {
        const token = window.localStorage.getItem("token");
        if (token) {
          return <Component {...props} />;
        } else {
          return <Navigate to={"/signin"} />;
        }
      }}
    />
  );
};

export default PrivateRoute;
