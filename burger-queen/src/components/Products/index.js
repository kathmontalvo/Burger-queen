import React, { useState, useEffect } from 'react';
import Header from '../Header';
import Clientname from './Cliente';
import Products from './Products';
import Pedido from './Pedido'
import MenuOpts from '../Options';
import postOrders from '../../controller/orders/orders'
import ctrl from '../../controller/products';

const Home = (props) => {
  const [name, setName] = useState("");
  const [type, setType] = useState('Desayuno')
  const [prodData, setProdData] = useState([]);
  const [items, setItems] = useState([]);
  const [show, setShow] = useState(true)

  const updateName = (e) => {
    setName(e.target.value)
  }

  const mapFunc = (fn) => (id) => {
    setItems(fn(items, id))
  }

  const increase = mapFunc(ctrl.increase)
  const decrease = mapFunc(ctrl.decrease)
  const remove = mapFunc(ctrl.delete)

  useEffect(() => {
    fetch('http://165.22.166.131:8080/products', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      },
    }).then(resp => resp.json())
      .then(data => {
        // console.log(data)
        setProdData(data)
      })
  }, [])

  return (
    <>
      <Header logoutprop={props} />
      <main id="menu" className="container-fluid d-flex flex-wrap align-content-around">
        <Clientname name={name} updateName={updateName} show={show} setShow={setShow} />
        <section className="row">
          <div className="col-md-6">
            <ul className="nav nav-tabs w-100" role="tablist">
              <MenuOpts click={() => setType('Desayuno')} options="Desayuno" aClass="nav-link active" />
              <MenuOpts click={() => setType('Almuerzo')} options="Almuerzo" aClass="nav-link" />
            </ul>
            <div  data-testid='opt' className="card-columns">
              {type === 'Desayuno' && (
                <Products data={prodData} menu="Desayuno" add={increase} />
              )}
              {type === 'Almuerzo' && (
                <Products data={prodData} menu="Almuerzo" add={increase} />
              )}
            </div>
          </div>

          <Pedido
            items={ctrl.mix(prodData, items)}
            remove={remove} decrease={decrease}
            increase={increase}
            postOrder={() => {
              postOrders(name, items.map(el => ({ product: el._id, qty: el.qty })), localStorage.getItem('token'), '5d4203b7e96305001250ea9d')
                .then((order) => {
                  setItems([]);
                  setName("");
                  setShow(true)
                })
                .catch(console.error)
            }} />
        </section>

      </main>
    </>
  )
};

export default Home;