import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';

import Cart from '../Cart/Cart'; 
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import { Link } from 'react-router-dom';
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data));
    },[])
    const addToCart=(product)=>{ 
        const exists = cart.find(pd=>pd.id===product.id);
        let newCart = [];
        if(!exists) 
        {
            product.quantity=1; 
            newCart = [...cart, product];
        }
        else
        {
            exists.quantity +=1;
            const remaining = cart.filter(pd=>pd.id!=exists.id);
            newCart = [...remaining, exists];
        }
        setCart(newCart);
        addToDb(product.id); 
    }  
    useEffect(()=>{
        //console.log(products);
        const storedCart = getShoppingCart();
        let newCart=[]; 
        for(const id in storedCart) 
        {
            const addedProduct = products.find(product=>product.id===id);
            if(addedProduct)
            { 
                addedProduct.quantity = storedCart[id]; 
                newCart.push(addedProduct)
            }
            //console.log('added ', addedProduct);
        }
        setCart(newCart)
    },[products])  
    //console.log(cart);
    const handeClearCart=()=> 
    {
        setCart([]);
        deleteShoppingCart();
    }
    return (

        <div className='shop_container'>
            <div className="products">
                {
                    products.map(product => <Product addToCart={addToCart} key={product.id} product={product}></Product>)
                }
            </div>
            <div className="cart"> 
                <Cart handeClearCart={handeClearCart} cart={cart}>
                    <Link to='/order'>Review Order</Link>
                </Cart>
            </div>
        </div>
        
    );
};

export default Shop;