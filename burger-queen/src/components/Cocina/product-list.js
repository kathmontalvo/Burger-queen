import React, { useState } from 'react'

const ProductList = ({ el }) => {
  const [line, setLine] = useState(true)
  return (
    <li className="list-group-item">
      <label data-testid={el.product.name} style={{ textDecoration: !line ? "line-through" : "" }}>
        <input
          data-testid={el.product.productId}
          onChange={() => line ? setLine(false) : setLine(true)}
          type="checkbox" /> {el.qty} unid. {el.product.name}
      </label>
    </li>
  )
}

export default ProductList;