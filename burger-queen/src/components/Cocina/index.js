import React, { useState, useEffect } from 'react';
import Header from '../Header'
import OrderCard from './order-card';
import Options from '../Options'
const Cocina = (props) => {
  const [orders, setOrders] = useState([]);
  const [type, setType] = useState('pending');
  useEffect(() => {
    setInterval(() => {
      fetch('http://165.22.166.131:8080/orders?page=1&limit=10', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('token')
        },
      }).then(resp => resp.json())
        .then((data) => {
          if (data.length > 0) {
            setOrders(data)
          } else {
            const newArr = [];
            orders.forEach((el1) => data.forEach((el2) => {
              if (el1._id !== el2._id) {
                newArr.push(el2)
                setOrders(newArr)
              }
            }))
          }
          console.log(data)
        })
    }, 10000)
  }, [])
  return (
    <div className="container-fluid">
      <Header logoutprop={props} />
      <div className="row w-100">
        <ul className="nav nav-tabs w-100" role="tablist">
          <Options click={() => setType('pending')} options="Pending" aClass="nav-link active" />
          <Options click={() => setType('delivered')} options="Delivered" aClass="nav-link" />
        </ul>
        <section>
          {orders.length !== 0 &&
            orders.map(el => {
              if(el.status === 'pending' && type === 'pending'){
                return <OrderCard order={el} key={el._id} />
              } else if(el.status !== 'pending' && type === 'delivered' ) {
                return <OrderCard order={el} key={el._id} />
              }
            }).sort((a, b) => {
              console.log(a, b)
              const aValue = a.props.order.dateEntry;
              const bValue = b.props.order.dateEntry;
              if (new Date(aValue) > new Date(bValue)) {
                return 1;
              } else if (new Date(aValue) < new Date(bValue)) {
                return -1;
              } else {
                return 0;
              }
            })
          }
        </section>
      </div>
    </div>
  )
}
export default Cocina;