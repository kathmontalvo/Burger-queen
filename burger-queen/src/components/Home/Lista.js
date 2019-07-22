import React from 'react'

const Lista = ({ order, cb, cant, menos }) => {

  return (
    <tr className='d-flex width-100 text-align border-bottom my-2' key={order._id}>
      <td className="d-flex col-4 text-align-left">
        <button className='border-none transparent'><i className="fas fa-trash-alt text-gray"></i></button>
        <p className='my-0 text-gray'>{order.name}</p>
      </td>
      <td className='d-flex col-4 justify-content-center'>
        <button className='border-none transparent'><i className="fas fa-minus-circle blue-color"></i></button>
        <span className='text-gray'>{cant}</span>
        <button onClick={cb} className='border-none transparent'><i className="fas fa-plus-circle blue-color"></i></button>
      </td>
      <td className="col-4">
        <p className='my-0 text-gray'>${order.price}.00</p>
      </td>
    </tr>)

}

export default Lista;