import React from 'react';

const Product = ({name, price, productImg}) => {

  return (
  <div className="card my-3" >
  <img className="card-img-top" src={productImg} alt={name}/>
  <div className="card-body">
    <h5 className="card-title">{name}</h5>
    <a href="#" className="card-link">{price}</a>
  </div>
</div>
  )
}

export default Product