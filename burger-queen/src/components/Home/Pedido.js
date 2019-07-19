import React from 'react'
import Lista from './Lista'
const Pedido = ({data, cantidad, update}) => {
  return (
    <div className='d-flex align-items-center column main-box my-2'>
      <div className='width-100 text-align border-bottom'><h3>Pedido</h3></div>
      <div className='d-flex width-100 text-align background-gray align-items-center'>
        <p className='col-4 my-1'>Nombre</p>
        <p className='col-4 my-1'>Cantidad</p>
        <p className='col-4 my-1'>Precio</p>
      </div>
      <Lista 
      order={data}
      cant={cantidad} 
      cb={update}/>
      <div className='d-flex border-top width-100 mt-5'>
        <h4 className='col-2'>Total:</h4>
        <p className='my-0 col-6 blue-color'>$7.00</p>
        <button className='col-4 btn btn-primary background-blue'>Enviar a cocina</button>
      </div>
    </div>
  )
}

export default Pedido