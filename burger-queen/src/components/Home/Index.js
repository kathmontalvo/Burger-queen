import React, { useState } from 'react';
import Header from './Header';
import Clientname from './Cliente';
import Opts from './Menu-opt';
import Lunch from '../../images/lunch-menu.png';
import Breakfast from '../../images/breakfast-menu.jpg';
import Products from './Products';
import Pedido from './Pedido'
const Home = () => {


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
      <div className="card-columns">
        {type === 'Desayuno' && (
          < Products data={prodData} menu={"Desayuno"} />
        )}
        {type === 'Almuerzo' && (
          < Products data={prodData} menu={"Almuerzo"} />
        )}
      </div>
      <Pedido 
      name='Cafe'
      quantity='2'
      price='7'/>
    </>
  )
}

export default Home