import React, { useState, useEffect } from 'react';
import pedidos from '../../controller/kitchen'

const Cocina = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/orders?page=1&limit=10', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer' + localStorage.getItem('token')
          },
        }).then(resp => resp.json())
          .then((data) => {
              console.log(data)
            //   const newdata= data.map((el)=>{return el.orders})
            setOrders(data)
          })
      }, [])
    return(
        <div>
            {/* <button onClick={pedidos} className='btn btn primary'>Get orders</button> */}
            {orders}
        </div>
    )
}
export default Cocina;