import React, { useState, useEffect } from 'react'

const Lista = ({ order, deleteProd, price, setPrice}) => {

  return (
    <tr className='d-flex width-100 text-align border-bottom my-2'>
      <td className="d-flex col-4 text-align-left">
        <button className='border-none transparent'><i className="fas fa-trash-alt text-gray"></i></button>
        <p className='my-0 text-gray'>{order.name}</p>
      </td>
      <td className='d-flex col-4 justify-content-center'>
        <button className='border-none transparent'><i className="fas fa-minus-circle blue-color"></i></button>
        <span className='text-gray'>{}</span>
        <button className='border-none transparent'><i className="fas fa-plus-circle blue-color"></i></button>
      </td>
      <td className="col-4">
        <p className='my-0 text-gray'>S/. {order.price}</p>
      </td>
    </tr>)

}

export default Lista;