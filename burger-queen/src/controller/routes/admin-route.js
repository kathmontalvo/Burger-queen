import React from "react";
import { Route, Redirect } from "react-router-dom";
import auth from "./auth";

const ProtectedRoute = ({
  component: Component,
  ...rest
}) => {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <Route
      {...rest}
      render={props => {
        if ((auth.isAuthenticated() || localStorage.getItem('token')) !== null && user.roles.admin) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/home",
                state: {
                  from: props.location
                }
              }}
            />
          );
        }
      }}
    />
  );
};
export default ProtectedRoute;