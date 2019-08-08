import React from 'react';

const Product = ({ data, menu, add }) => {

  const product = data.filter(prod => {
    return prod.type === menu
  })

  return product.map(product => (
    <div data-testid={product._id} className="card my-3" key={product._id} onClick={() => { add(product._id) }}>
      <img className="card-img-top" src={product.image} alt={product.name} />
      <div className="card-body">
        <h5 data-testid={product.name} className="card-title">{product.name}</h5>
      </div>
      <div className="card-footer justify-content-center">
        S/. {product.price}
      </div>
    </div>
  ))
};

export default Product;