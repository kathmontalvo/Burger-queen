import React from 'react'


const Lista = ({order, cb, cant}) =>{

    return order.map( order =>(
        <div className='d-flex width-100 text-align border-bottom my-2' key={order._id}>
        <div className='border-none transparent padding-3'><i className="fas fa-trash-alt text-gray"></i></div>
        <p className='my-0 col-3 text-gray'>{order.name}</p>
        <div className='d-flex col-5 justify-content-center'>
          <div  className='padding-3 border-none transparent'><i className="fas fa-minus-circle blue-color"></i></div>
          <span className='text-gray' value={cant}>{cant}</span>
          <div  onClick={cb} className='padding-3 border-none transparent'><i className="fas fa-plus-circle blue-color"></i></div>
        </div>
        <p className='my-0 col-3 text-gray'>${order.price}.00</p>
      </div>
    ))
}

export default Lista;