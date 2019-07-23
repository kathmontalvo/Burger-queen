import React from 'react'

const Lista = ({ order, deleteProd, cant, setCant}) => {


  // const updateCant = () => {
  //   setCant(cant + 1)
  //   setTotal(total)
  // }
  // const minusCant = () => {
  //   setCant(cant - 1)
  //   setTotal(total)
  // }



  return (
    <tr className='d-flex width-100 text-align border-bottom my-2'>
      <td className="d-flex col-4 text-align-left">
        <button onClick={deleteProd} className='border-none transparent'><i className="fas fa-trash-alt text-gray"></i></button>
        <p className='my-0 text-gray'>{order.name}</p>
      </td>
      <td className='d-flex col-4 justify-content-center'>
        <button onClick={() => setCant(prevCount => prevCount - 1)} className='border-none transparent'><i className="fas fa-minus-circle blue-color"></i></button>
        <span className='text-gray'>{cant}</span>
        <button onClick={() => setCant(prevCount => prevCount + 1)} className='border-none transparent'><i className="fas fa-plus-circle blue-color"></i></button>
      </td>
      <td className="col-4">
        <p className='my-0 text-gray'>S/. {order.price*cant}</p>
      </td>
    </tr>)

}

export default Lista;