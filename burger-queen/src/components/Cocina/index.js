import React, { useState, useEffect } from 'react';

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
              const newdata= data.map((el)=>{return el})
            setOrders(newdata)
          })
      }, [])
    return(
        <div>
            {orders.length !== 0 && 
            <div>{orders[0].client}</div>
            } 
            
        </div>
    )
}
export default Cocina;