import React from 'react';
import './Product.css';

const Product = (props) => {
    const {name, img, price} = props.product;
    return (
        <div className='product'>
            <img  src={img} alt=''/>
            <div className='product-info'>
            <p className='product-name'>{name}</p>
            <p> <small> Pricer:{price}</small></p>
            </div>
            <button onClick={() => props.handleAddToCart(props.product)} className='cart-button'>
                <p className='btn-text'>Add to Cart</p>
            </button>

    
        </div>
    );
};

export default Product;