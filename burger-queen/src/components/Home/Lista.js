import React, {useState} from 'react'

const Lista = ({ order, deleteProd, item, setTotal}) => {
  const [cant, setCant] = useState(1)
  const updateCant = () => {
    setCant(cant + 1)
  }
  const minusCant = () => {
    setCant(cant - 1)
  }
  const total = item.reduce(
    (total, order) => total + (parseInt(order.price) * cant),
    0,
  );
setTotal(total)
  return (
    <tr className='d-flex width-100 text-align border-bottom my-2'>
      <td className="d-flex col-4 text-align-left">
        <button onClick={deleteProd} className='border-none transparent'><i className="fas fa-trash-alt text-gray"></i></button>
        <p className='my-0 text-gray'>{order.name}</p>
      </td>
      <td className='d-flex col-4 justify-content-center'>
        <button onClick={minusCant} className='border-none transparent'><i className="fas fa-minus-circle blue-color"></i></button>
        <span className='text-gray'>{cant}</span>
        <button onClick={updateCant} className='border-none transparent'><i className="fas fa-plus-circle blue-color"></i></button>
      </td>
      <td className="col-4">
        <p className='my-0 text-gray'>{order.price*cant}</p>
      </td>
    </tr>)

}

export default Lista;