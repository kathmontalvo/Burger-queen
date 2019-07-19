import React from 'react'

const Lista = ({order, cb, cant}) =>{

    return order.map( order =>(
        <div className='d-flex width-100 text-align border-bottom my-2' key={order._id}>
        <button className='border-none transparent'><i className="fas fa-trash-alt text-gray"></i></button>
        <p className='my-0 col-3 text-gray'>{order.name}</p>
        <div className='d-flex col-5 justify-content-center'>
          <button className='border-none transparent'><i className="fas fa-minus-circle blue-color"></i></button>
          <span className='text-gray'>{cant}</span>
          <button  onClick={cb} className='border-none transparent'><i className="fas fa-plus-circle blue-color"></i></button>
        </div>
        <p className='my-0 col-3 text-gray'>${order.price}.00</p>
      </div>
    ))
}

export default Lista;