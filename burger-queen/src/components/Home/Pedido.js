import React from 'react'

const Pedido = ({ name, price, quantity }) => {

  return (
    <div className='d-flex align-items-center column main-box my-2'>
      <div className='width-100 text-align border-bottom'><h3>Pedido</h3></div>
      <div className='d-flex width-100 text-align background-gray align-items-center'>
        <p className='col-4 my-1'>Nombre</p>
        <p className='col-4 my-1'>Cantidad</p>
        <p className='col-4 my-1'>Precio</p>
      </div>

      <div className='d-flex width-100 text-align border-bottom my-2'>
        <button className='border-none transparent'><i className="fas fa-trash-alt text-gray"></i></button>
        <p className='my-0 col-3 text-gray'>{name}</p>
        <div className='d-flex col-5 justify-content-center'>
          <button className='border-none transparent'><i className="fas fa-minus-circle blue-color"></i></button>
          <span className='text-gray'>{quantity}</span>
          <button className='border-none transparent'><i className="fas fa-plus-circle blue-color"></i></button>
        </div>
        <p className='my-0 col-3 text-gray'>${price}.00</p>
      </div>

      <div className='d-flex border-top width-100 mt-5'>
        <h4 className='col-2'>Total:</h4>
        <p className='my-0 col-6 blue-color'>${price}.00</p>
        <button className='col-4 btn btn-primary background-blue'>Enviar a cocina</button>
      </div>
    </div>
  )
}

export default Pedido