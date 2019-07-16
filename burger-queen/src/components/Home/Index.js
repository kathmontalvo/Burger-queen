import React from 'react';
import ReactDOM from 'react-dom'
import Header from './Header';
import Clientname from './Cliente';
import Opts from './Menu-opt';
import Lunch from '../../images/lunch-menu.jpg';
import Breakfast from '../../images/breakfast-menu.jpg';
import Products from './Products';
import cafea from '../../images/cafeamericano.webp'
import cafel from '../../images/cafeleche.png'
import sandwich from '../../images/jamonqueso.png'
import jugo from '../../images/fruta.png'
const Home = () => {
  const changeComp = () => {
    const element = (
      <div>
        <Products name="Café americano " price="S/. 5.00" productImg={cafea}/>
        <Products name="Café con leche" price="S/. 7.00" productImg={cafel}/>
        <Products name="Sandwich de jamón y queso" price="S/. 10.00" productImg={sandwich}/>
        <Products name="Jugo de frutas natural" price="S/. 7.00" productImg={jugo}/>
      </div> 
    );
    ReactDOM.render(element, document.querySelector('#home-menu'));
  }
  return (
    <>
      <Header />
      <main id="home-menu" className="container-fluid d-flex flex-wrap align-content-around">
        <Clientname />
        <Opts click={changeComp} name="DESAYUNO" imgMenu={Breakfast} />
        <Opts name="ALMUERZO" imgMenu={Lunch} />
      </main>
    </>
  )
}

export default Home