import React from 'react'

const Pedido = ({ name, price, quantity }) => {
  return (
    <div className='d-flex align-items-center column main-box my-2'>
      <div className='width-100 text-align border-bottom'><h3>Checkout</h3></div>
      <div className='d-flex width-100 text-align background-gray align-items-center'>
        <p className='col-4 my-1'>Name</p>
        <p className='col-4 my-1'>QTY</p>
        <p className='col-4 my-1'>Price</p>
      </div>

      <div className='d-flex width-100 text-align border-bottom my-2'>
        <button><i className="fas fa-trash-alt text-gray"></i></button>
        <p className='my-0 col-3 text-gray'>{name}</p>
        <div className='d-flex col-5 justify-content-center'>
          <button><i className="fas fa-minus-circle price"></i></button>
          <span className='text-gray'>{quantity}</span>
          <button><i className="fas fa-plus-circle price"></i></button>
        </div>
        <p className='my-0 col-3 text-gray'>${price}.00</p>
      </div>

      <div className='d-flex border-top width-100 mt-5'>
        <h4 className='col-6'>Total</h4>
        <p className='my-0 col-6 right price'>${price}.00</p>
      </div>
    </div>
  )
}

export default Pedido