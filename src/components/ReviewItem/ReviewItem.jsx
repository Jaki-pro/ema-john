import React from 'react';
import './ReviewItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
const ReviewItem = ({ product , handleRemoveItem}) => {
    return (

        <div className='review-item'>
            <img src={product.img} alt="" />
            <div className='second'>
                <div style={{ width: '300px' }}>
                    <h4>{product.name}</h4>
                    <p>Price: ${product.price}</p>
                    <p>Quantity: {product.quantity}</p>
                </div>
                <button onClick={()=>handleRemoveItem(product.id)} style={{ width: '60px', display: 'block', height: '40px', color: 'white' }}><FontAwesomeIcon icon={faTrashAlt} /></button>
            </div>

        </div>


    );
};
ReviewItem.propTypes
export default ReviewItem;