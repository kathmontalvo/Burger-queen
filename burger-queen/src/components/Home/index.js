import React from 'react';
import Opts from './Menu-opt'
import lunch from '../../images/lunch-menu.png';
import breakfast from '../../images/breakfast-menu.jpg';
import Header from '../Header'
import auth from '../../controller/routes/auth'


const Home = (props) => {
  return (
    <>
      <Header logoutprop={props} />
      <section id="home-menu" className="mb-4 container-fluid d-flex flex-wrap align-content-around justify-content-center">
        <Opts click={() => { return auth.login(() => { props.history.push("/orders") })}} name="ÓRDENES" imgMenu={breakfast} />
        <Opts click={() => { return auth.login(() => { props.history.push("/cocina") })}} name="COCINA" imgMenu={lunch} />
      </section>
    </>
  )
}

export default Home;