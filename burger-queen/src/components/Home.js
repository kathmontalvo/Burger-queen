import React from 'react';
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      Home
      {/* <Router> */}
        <Link to="/">Cerrar sesión</Link>
      {/* </Router> */}
    </div>
  )
}

export default Home