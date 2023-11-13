import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';

import Cart from '../Cart/Cart'; 
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data));
    },[])
     
    const addToCart=(product)=>{
        setCart([...cart, product]) 
        addToDb(product.id); 
    }
    const [finalCart, setFinalCart] = useState([]);
    useEffect(()=>{
        const storedCart = getShoppingCart();
        console.log(storedCart);
         
    },[]) 
    return (

        <div className='shop_container'>
            <div className="products">
                {
                    products.map(product => <Product addToCart={addToCart} key={product.id} product={product}></Product>)
                }
            </div>
            <div className="cart"> 
                <Cart cart={cart}></Cart>
            </div>
        </div>
        
    );
};

export default Shop;