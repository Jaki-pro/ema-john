import React from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faStreetView, faArrowRight} from '@fortawesome/free-solid-svg-icons'
const Cart = ({selected}) => {
    let total=0;
    for(let i=0; i<selected.length;i++) total+=selected[i].price; 
    let shipping = 0;
    if(total<100 && total!=0) shipping=20;
    const tax = (total*5/100);
    return (
        <>
            <h3>Order Summary</h3>
            <p>Selected Items: {selected.length}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping Cost: ${shipping.toFixed(2)}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h4>Grand Total: <u style={{textDecoration:'none', color: 'white'}}>${(tax+total+shipping).toFixed(2)}</u></h4>
            <button className="clear-cart">Clear Cart <FontAwesomeIcon style={{marginRight:'5px'}} icon={faTrash} /></button>
            <br />  
            <button className="review-order">Review Order <FontAwesomeIcon style={{marginRight:'5px'}} icon={faArrowRight} /></button>
        </>
    );
};
Cart.propTypes;

export default Cart;