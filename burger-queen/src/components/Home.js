import React from 'react';
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Link, withRouter} from 'react-router-dom';
import Header from '../components/Header'
import CLientname from '../components/Cliente'

const Home = () => {
  return (
    <div data-testid='home'>
      <Header />
      <CLientname />
      <Link to="/">Cerrar sesión</Link>
    </div>
  )
}

export default Home