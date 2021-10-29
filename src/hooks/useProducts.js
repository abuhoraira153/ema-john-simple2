import { useEffect, useState } from "react/cjs/react.development"

const useProdcuts = () => {
    const [prodcucts, setProducts] = useState([])
    useEffect(()=>{
        fetch('./products.JSON')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return [prodcucts, setProducts]
}
export default useProdcuts;