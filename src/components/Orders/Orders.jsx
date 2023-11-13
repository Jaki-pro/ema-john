import Cart from '../Cart/Cart';
import { Link, useLoaderData } from 'react-router-dom'; 
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css'
import { useState } from 'react';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
const Orders = () => {
    const savedCart = useLoaderData();
    const [cart, setCart] = useState(savedCart);
    console.log(cart); 
     
    const handleRemoveItem = (id)=>
    { 
        const remaining = cart.filter(prod=>prod.id!==id);
        removeFromDb(id);
        setCart(remaining);
    } 
    const handeClearCart=()=>
    {
        setCart([]);
        deleteShoppingCart();
    }
    return (
        <div className='shop_container'>
            <div className=''>
                {
                    cart.map(product=><ReviewItem handleRemoveItem={handleRemoveItem} product={product}  key={product.id}></ReviewItem>)
                }
            </div>
            <div style={{width:'300px'}} className="cart">  
                <Cart  handeClearCart={handeClearCart} cart={cart}>
                    <Link to='/checkout'>Proceed Checkout</Link>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;