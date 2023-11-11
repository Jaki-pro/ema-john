import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';

import Cart from '../Cart/Cart';
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [selected, setSelected] = useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data));
    },[])
    const addToCart=(product)=>{
        setSelected([...selected, product])
    }
    return (
        <div className='shop_container'>
            <div className="products">
                {
                    products.map(product => <Product addToCart={addToCart} key={product.id} product={product}></Product>)
                }
            </div>
            <div className="cart"> 
                <Cart selected={selected}></Cart>
            </div>
        </div>
    );
};

export default Shop;