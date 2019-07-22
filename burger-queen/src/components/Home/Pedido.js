import React from 'react'
import Lista from './Lista'
const Pedido = ({ data, cantidad, update, minus }) => {
  return (
    <table className='d-flex align-items-center column main-box my-2'>
      <tr>
        <th><h3>Pedido</h3></th>
      </tr>
      <tr className='d-flex width-100 text-align background-gray align-items-center'>
        <th className='col-4 my-1'>Nombre</th>
        <th className='col-4 my-1'>Cantidad</th>
        <th className='col-4 my-1'>Precio</th>
      </tr>
      <tr>
        {/* <div className='width-100 text-align border-bottom'><h3>Pedido</h3></div> */}
        <Lista
          order={data}
          cant={cantidad}
          cb={update}
          menos={minus} />
      </tr>
      <tr className=' d-flex width-100 text-align background-gray align-items-center border-top'>
        <td className='col-4 my-1'>Total:</td>
        <td className='col-4 my-1 blue-color'>7.00</td>
        <td className='col-4 my-1'>
          <button className=' btn btn-primary background-blue'>Enviar a cocina</button>
        </td>
      </tr>
    </table>
  )
}

export default Pedido