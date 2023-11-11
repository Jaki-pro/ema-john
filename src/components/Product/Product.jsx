import React from 'react'; 
import './Product.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping} from '@fortawesome/free-solid-svg-icons'
const Product = ({addToCart, product}) => { 
    return (
        <div className='product'>
            <img src={product.img} alt="" />
            <h3 className='name'>{product.name}</h3>
            <p>Price: ${product.price}</p>
            
            <small><p>Manufacturer: {product.seller}</p></small> 
            <small><p>Rating: {product.ratings} star</p></small>  
            <button onClick={()=> addToCart(product)} className="button">Add to Cart <FontAwesomeIcon icon={faCartShopping} /></button>
        </div>
    );
};
Product.propTypes;
export default Product;