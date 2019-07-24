import React, { useState, useEffect } from 'react';
import Header from './Header';
import Clientname from './Cliente';
import Products from './Products';
import Pedido from './Pedido'
import MenuOpts from './Options';

const Home = () => {

  const [type, setType] = useState('Desayuno')
  const [prodData, setProdData] = useState([]);

  const items = prodData.map((prod)=> {
    return {prodId: prod._id, qty: 0}
  })
  
  useEffect(() => {
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
  }, [])

  return (
    <>
      <Header />
      <main id="home-menu" className="container-fluid d-flex flex-wrap align-content-around">
        <Clientname />
        <ul className="nav nav-tabs w-100" role="tablist">
          <MenuOpts  click={() => setType('Desayuno')} menu="Desayuno" aClass="nav-link active" />
          <MenuOpts  click={() => setType('Almuerzo')} menu="Almuerzo" aClass="nav-link" />
        </ul>

        <div className="card-columns">
          {type === 'Desayuno' && (
            < Products data={prodData} menu="Desayuno"  />
          )}
          {type === 'Almuerzo' && (
            < Products data={prodData} menu="Almuerzo"/>
          )}
        </div>

      </main>
      <Pedido />
    </>
  )
};

export default Home;