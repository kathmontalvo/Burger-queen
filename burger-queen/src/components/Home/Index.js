import React from 'react';
import ReactDOM from 'react-dom'
import Header from './Header';
import Clientname from './Cliente';
import Opts from './Menu-opt';
import Lunch from '../../images/lunch-menu.jpg';
import Breakfast from '../../images/breakfast-menu.jpg';
import Products from './Products';

const Home = () => {
  const changeComp = () => {
    const element = (
      <div>
        <Products name="Café americano " price="S/. 5.00" />
        <Products name="Café con leche" price="S/. 7.00" />
        <Products name="Sandwich de jamón y queso" price="S/. 10.00" />
        <Products name="Jugo de frutas natural" price="S/. 7.00" />
      </div> 
    );
    ReactDOM.render(element, document.querySelector('#home-menu'));
  }
  return (
    <>
      <Header />
      <Clientname />
      <div id="home-menu" className="container-fluid d-flex flex-wrap align-content-around">
        <Opts click={changeComp} name="DESAYUNO" imgMenu={Breakfast} />
        <Opts name="ALMUERZO" imgMenu={Lunch} />
      </div>
    </>
  )
}

export default Home