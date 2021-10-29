import { useEffect, useState } from "react/cjs/react.development"
import { getStoredCart } from "../utilities/fakedb"

const useCarts = products => {
    const [cart, setCarts ] = useState([])
    useEffect(()=>{
        if(products.length){
            const savedCart = getStoredCart()
            const storedCart = []
            for(const key in savedCart){
                const addedProduct = products.find(product => product.key === key)
                if(addedProduct){
                    const quantity = savedCart[key]
                    addedProduct.quantity = quantity;
                    storedCart.push(addedProduct)
                }
                setCarts(storedCart)
            }
        }
    },[products])
    return [cart,setCarts]
}
export default useCarts;