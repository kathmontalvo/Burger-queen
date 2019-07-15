import React from 'react';

import Header from '../components/Header'
import CLientname from '../components/Cliente'

const Home = () => {
  return (
    <div data-testid='home'>
      <Header />
      <CLientname />
    </div>
  )
}

export default Home