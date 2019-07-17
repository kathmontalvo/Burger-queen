import React from 'react'

const Pedido = ({name, price, quantity }) => {
    return(
        <div className='d-flex align-items-center column main-box my-2'>
        <div className='width-100 text-align border-bottom'><h3>Checkout</h3></div>
        <div className='d-flex width-100 text-align checkout'>
            <p className='col-4'>Name</p>
            <p className='col-4'>QTY</p>
            <p className='col-4'>Price</p>
        </div>
        <div className='d-flex width-100 text-align border-bottom'>
        <button><i class="fas fa-trash-alt"></i></button>
            <p className='my-0 col-3'>{name}</p>
            <div className='d-flex col-5 justify-content-center'>
                <button><i class="fas fa-minus-circle price"></i></button>
                <span>{quantity}</span>
                <button><i class="fas fa-plus-circle price"></i></button>
            </div>
            <p className='my-0 col-3'>${price}.00</p>
        </div>
        <div className='d-flex border-top checkout width-100 mt-5'>
            <h4 className='col-6'>Total</h4>
            <p className='my-0 col-6 right price'>${price}.00</p>
        </div>
        </div>
    )
}

export default Pedido