import React, { useState, useEffect } from 'react'
import Stopwatch from '../../controller/stopwatch'
const OrderCard = ({ order }) => {
  const productsArr = order.products
  // const [timer, setTimer] = useState(order.dateEntry);
  // const [active, setActive] = useState(true);

  // useEffect(() => {
  //   let interval = null;
  //   if (active) {
  //     interval = setInterval(() => {
  //       setTimer(timer => timer + 1)
  //     }, 100)
  //   } else if (!active && timer !== 0) {
  //     clearInterval(interval);
  //   }
  //   return () => clearInterval(interval);
  // }, [active, timer])

  return (
    <div className="col-sm-6 mt-3">
      <div className="card" >
        <div className="card-header d-flex justify-content-between align-items-center">
          <div className="d-flex">
            <div className="border-card-right pr-2">{order._id}</div>
            <div className="pl-2">{order.client}</div>
          </div>
          {/* <div>{timer}</div> */}
          <Stopwatch/>
        </div>
        <div className="card-body">
          <ul className="list-group">
            {productsArr.map((el) => (
              <li className="list-group-item" key={el.product}>
                <input type="checkbox" /> {el.qty} unid. {el.product}
              </li>
            ))}
          </ul>
        </div>
        <div className="card-footer">
          <button className="btn card-footer-btn w-100">Done</button>
        </div>
      </div>
    </div>
  )
}

export default OrderCard