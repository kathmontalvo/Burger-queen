import React, {useState} from 'react'
import Stopwatch from '../../controller/stopwatch'
import ProductList from './product-list';

const OrderCard = ({ order }) => {
  const productsArr = order.products
  const [active, setActive] = useState("20:00:00")

  
  return (
    <div className="col-sm-6 mt-3">
      <div className="card" >
        <div className="card-header d-flex justify-content-between align-items-center">
          <div className="d-flex">
            <div className="border-card-right pr-2">{order._id}</div>
            <div className="pl-2">{order.client}</div>
          </div>
          {/* <div>{timer}</div> */}
          <Stopwatch now={active} />
        </div>
        <div className="card-body">
          <ul className="list-group">
            {productsArr.map((el) => (
              <ProductList el={el} key={el.product}/>
            ))}
          </ul>
        </div>
        <div className="card-footer">
          <button onClick={() => setActive("00:00:00")} className="btn card-footer-btn w-100">Done</button>
        </div>
      </div>
    </div>
  )
}

export default OrderCard