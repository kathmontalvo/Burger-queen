import React, { useState } from 'react';
import ReactDOM from 'react-dom'
import Header from './Header';
import Clientname from './Cliente';
import Opts from './Menu-opt';
import Lunch from '../../images/lunch-menu.png';
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
        <Products name="Café americano " price="S/. 5.00" productImg={cafea} />
        <Products name="Café con leche" price="S/. 7.00" productImg={cafel} />
        <Products name="Sandwich de jamón y queso" price="S/. 10.00" productImg={sandwich} />
        <Products name="Jugo de frutas natural" price="S/. 7.00" productImg={jugo} />
      </div>
    );
    ReactDOM.render(element, document.querySelector('#home-menu'));
  }

  const [type, setType] = useState('Desayuno');
  const [prodData, setProdData] = useState([])

  fetch('http://localhost:5000/products', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer' + localStorage.getItem('token')
    },
  }).then(resp => resp.json())
    .then(data => {
      setProdData(data)
    })


  return (
    <>
      <Header />
      <Clientname />
      <main id="home-menu" className="container-fluid d-flex flex-wrap align-content-around justify-content-center">
        <Opts click={() => setType('Desayuno')} name="Desayuno" imgMenu={Breakfast} />
        <Opts click={() => setType('Almuerzo')} name="Almuerzo" imgMenu={Lunch} />
      </main>
      <div>
        {type === 'Desayuno' && (
          < Products data={prodData} menu={"Desayuno"} />
        )}
        {type === 'Almuerzo' && (
          < Products data={prodData} menu={"Almuerzo"} />
        )}
      </div>
    </>
  )
}

export default Home