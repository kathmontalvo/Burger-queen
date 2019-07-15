import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    cb()
  },
};

const Login = () => {
  const [referrer, setReferrer] = useState(false);

  const login = () => {
    fakeAuth.authenticate(() => {
      setReferrer(true)
    });
  };

  let { from } = { from: { pathname: "/home" } };

  if (referrer) return <Redirect to={from} />;

  return (
      <button onClick={login}>Log in</button>
  )
}

export default Login