import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props
    // console.log(cart)
    let totalQuantity = 0;
    let total = 0;
    for (const product of cart){
        if(!product.quantity){
            product.quantity = 1;
        }
        total = total + product.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    }
    const shipping = total > 0 ? 15 : 0;
    const tax = (total + shipping) * 0.10;
    const grandTotal = total + shipping + tax;
    return (
        <div>
            <div className = "top-part">
                <h2>Order summary</h2>
                <h3>Items ordered : {totalQuantity}</h3>
            </div>
            <div className = "manage-cart">
                <div>
                    <p>Total : </p>
                    <p>Shipping : </p>
                    <p>Tax : </p>
                    <h2>Grand Total : </h2>
                </div>
                <div>
                    <p>{total.toFixed(2)}</p>
                    <p>{shipping.toFixed(2)}</p>
                    <p>{tax.toFixed(2)}</p>
                    <h2>{grandTotal.toFixed(2)}</h2>
                </div>
            </div>
        </div>
    );
};

export default Cart;