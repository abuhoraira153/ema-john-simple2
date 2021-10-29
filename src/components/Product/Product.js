import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
import Rating from 'react-star-ratings'

const Product = (props) => {
    // console.log(props.product)
    const {img, name, seller, price, stock} = props.product;
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className = "product">
            <div>
                <img src={img} alt="" />
            </div>
            <div className = "product-details">
                <h3 className = "product-name"> {name} </h3>
                <p><small>by : {seller} </small></p>
                <p>Price : {price} </p>
                <p><small>only {stock} left in stock - order soon</small></p>
                <Rating></Rating>
                <button
                onClick = {()=>props.handleAddToCart(props.product)} 
                className = "btn-regular">{element} Add to cart</button>
            </div>
        </div>
    );
};

export default Product;