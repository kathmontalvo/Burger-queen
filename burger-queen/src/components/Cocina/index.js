import React, { useState, useEffect } from 'react';
import Header from '../Header'
import OrderCard from './order-card';

const Cocina = (props) => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/orders?page=1&limit=2', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer' + localStorage.getItem('token')
          },
        }).then(resp => resp.json())
          .then((data) => {
            setOrders(data)
          })
      }, [])
    return(
        <div className="container-fluid">
          <Header logoutprop={props}/>
          <div className="row w-100">
          {orders.length !== 0 && 
            orders.map(el=>(
            <OrderCard order={el} key={el._id}/>
            ))
            } 
          </div>            
        </div>
    )
}
export default Cocina;