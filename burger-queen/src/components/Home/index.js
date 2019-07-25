import React, { useState, useEffect } from 'react';
import Header from './Header';
import Clientname from './Cliente';
import Products from './Products';
import Pedido from './Pedido'
import MenuOpts from './Options';
import ctrl from '../../controller/products';

const Home = () => {

  const [type, setType] = useState('Desayuno')
  const [prodData, setProdData] = useState([]);
  const [items, setItems] = useState([]);

  const mapFunc = (fn) => (id) => {
    setItems(fn(items, id))
  }

  const increase = mapFunc(ctrl.increase)
  const decrease = mapFunc(ctrl.decrease)
  const remove = mapFunc(ctrl.delete)

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
          <MenuOpts click={() => setType('Desayuno')} menu="Desayuno" aClass="nav-link active" />
          <MenuOpts click={() => setType('Almuerzo')} menu="Almuerzo" aClass="nav-link" />
        </ul>

        <div className="card-columns">
          {type === 'Desayuno' && (
            <Products data={prodData} menu="Desayuno" add={increase} />
          )}
          {type === 'Almuerzo' && (
            <Products data={prodData} menu="Almuerzo" add={increase} />
          )}
        </div>

        <Pedido items={ctrl.mix(prodData, items)} remove={remove} decrease={decrease} increase={increase} />
      </main>
    </>
  )
};

export default Home;