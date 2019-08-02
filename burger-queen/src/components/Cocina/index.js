import React, { useState, useEffect } from 'react';
import Header from '../Header'
import OrderCard from './order-card';
const Cocina = (props) => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    setInterval(()=>{
      fetch('http://165.22.166.131:8080/orders?page=1&limit=10', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('token')
        },
      }).then(resp => resp.json())
        .then((data) => {
          if(data.length > 0){
            setOrders(data)
          }else{
            const newArr = [];
            orders.forEach((el1)=> data.forEach((el2)=>{
              if(el1._id !== el2._id){
                newArr.push(el2)
                setOrders(newArr)
              }
            }))
          }
          console.log(orders)
        })
    }, 0)
  }, [])
  return (
    <div className="container-fluid">
      <Header logoutprop={props} />
      <div className="row w-100">
        {orders.length !== 0 &&
          orders.map(el => (
            <OrderCard order={el} key={el._id} />
          )).sort((a, b) => {
            const aValue= a.props.order.dateEntry;
            const bValue = b.props.order.dateEntry;
            if(new Date(aValue) > new Date(bValue)){
              return 1;
            } else if ( new Date(aValue) < new Date(bValue)) {
              return -1;
            } else {
              return 0;
            }
          })
        }
      </div>
    </div>
  )
}
export default Cocina