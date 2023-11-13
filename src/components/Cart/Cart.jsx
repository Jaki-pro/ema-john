 
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faArrowRight} from '@fortawesome/free-solid-svg-icons'
const Cart = ({cart}) => {
    let price=0;
    let quantity=0;
    let shipping = 0; 
    let tax=0;
    for(const product of cart)
    {    
        quantity = quantity + product.quantity;
        price = price + product.price*product.quantity;
        shipping+=(product.quantity);
        tax+=(product.price*(5/100))*product.quantity
    }
    
    return (
        <>
            <h3>Order Summary</h3>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: ${price}</p>
            <p>Total Shipping Cost: ${shipping.toFixed(2)}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h4>Grand Total: <u style={{textDecoration:'none', color: 'white'}}>${(price+tax+shipping).toFixed(2)}</u></h4>
            <button className="clear-cart">Clear Cart <FontAwesomeIcon style={{marginRight:'5px'}} icon={faTrash} /></button>
            <br />  
            <button className="review-order">Review Order <FontAwesomeIcon style={{marginRight:'5px'}} icon={faArrowRight} /></button>
        </>
    );
};
Cart.propTypes;

export default Cart;