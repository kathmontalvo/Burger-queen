import React, { useState, useEffect } from 'react';
import Header from './Header';
import Clientname from './Cliente';
import Products from './Products';
import Pedido from './Pedido'
import MenuOpts from './Options';
import Lista from './Lista';


const Home = () => {


  const [type, setType] = useState('Desayuno');
  const [prodData, setProdData] = useState([]);
  const [cant, setCant] = useState(1)
  const [item, setItems] = useState([])
  console.log(item)


  const updateCant = () => {
    setCant(cant + 1)
  }
  const minusCant = () => {
    setCant(cant - 1)
  }
  const quantityActions = {updateCant, cant, minusCant}

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
            < Products data={prodData} menu={"Desayuno"} cb={(data) => { setItems(item.concat(data)) }} />
          )}
          {type === 'Almuerzo' && (
            < Products data={prodData} menu={"Almuerzo"} cb={(data) => { setItems(item.concat(data)) }} />
          )}
        </div>
        
      </main>
      <Pedido item={item} qty={quantityActions}/>
    </>
  )
};

export default Home;