import React from 'react';
import useCarts from '../../hooks/useCarts';
import useProdcuts from '../../hooks/useProducts';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const OrderReview = () => {
    const [products, setProducts] = useProdcuts()
    const [cart, setCarts] = useCarts(products)
    const handleRemove = (key) => {
        const newCart = cart.filter(product => product.key !==key)
        setCarts(newCart)
    }
    return (
        <div>
            <div className="shop-container">
                <div className="product-container">
                    {
                        cart.map(product => <ReviewItem
                            key = {product.key} 
                            product = {product}
                            handleRemove = {handleRemove}
                            ></ReviewItem>)
                    }
                </div>
                <div className="cart-container">
                    <Cart cart = {cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default OrderReview;