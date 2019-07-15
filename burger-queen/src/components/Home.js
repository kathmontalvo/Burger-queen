import React from 'react';

import Header from '../components/Header'
import CLientname from '../components/Cliente'
import Opts from '../components/Menu-opt'

const Home = () => {
  return (
    <div data-testid='home'>
      <Header />
      <CLientname />
      <div className="d-flex justify-content-around">
        <Opts name="Desayuno" classOpt="btn btn-opts"/>
        <Opts name="Almuerzo" classOpt="btn btn-opts"/>
      </div>
    </div>
  )
}

export default Home