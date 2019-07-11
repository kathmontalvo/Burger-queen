import React from 'react';
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Link, withRouter} from 'react-router-dom';

const Home = () => {
  return (
    <div>
      Home
        <Link to="/">Cerrar sesión</Link>
    </div>
  )
}

export default Home