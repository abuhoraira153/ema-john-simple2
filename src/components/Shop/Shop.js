import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart,setCart] = useState([])
    const [displayProducts, setDisplayProducts]  = useState([])
    useEffect(()=>{
        // console.log('api is called')
        fetch('./products.JSON')
        .then(res => res.json())
        .then(data => {
            setProducts(data)
            setDisplayProducts(data)
            // console.log('Product received.')
        })
    },[])
    useEffect(() => {
        // console.log('L S called.')
        if(products.length){
            const savedCart = getStoredCart()
            const storedCart = []
        // console.log(savedCart)
        for (const key in savedCart){
            // console.log(key, savedCart[key])
            const addedProduct = products.find(product => product.key === key)
            if(addedProduct){
                const quantity = savedCart[key]
                addedProduct.quantity = quantity
                // console.log(addedProduct)
                storedCart.push(addedProduct)
            }
            setCart(storedCart)
        }
        }
    },[products])
    const handleAddToCart = product => {
        const newCart = [...cart, product]
        setCart(newCart)
        addToDb(product.key)
    }
    const changeHandler = event => {
        const searchText = event.target.value;
        const matchedProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()))
        setDisplayProducts(matchedProducts)
        console.log(matchedProducts.length)
    }
    return (
        <>
            <div className="search-container">
                <input onChange = {changeHandler} type="text" placeholder = "Search Prodcut" />
            </div>
            <div className = "shop-container">
            <div className="product-container">
                <h2>This is product-container : {products.length}</h2>
                {
                    displayProducts.map(product => <Product
                    key = {product.key}
                    product = {product}
                    handleAddToCart = {handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart = {cart}></Cart>
            </div>
        </div>
        </>
    );
};

export default Shop;