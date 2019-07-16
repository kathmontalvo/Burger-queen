import React from 'react';

const Product = ({name, price, productImg}) => {
  return (
    <div>
      <img src={productImg} alt={name}/>
      <div>
        <h3>{name}</h3>
        <h3>{price}</h3>
      </div>
    </div>
  )
}

export default Product