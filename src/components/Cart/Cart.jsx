import React, { Children } from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
const Cart = ({cart, handleClearCart, children}) => {
  console.log(cart, handleClearCart);
  let total = 0;
  let totalShipping = 0;
  let quantity = 0;
  
  for(const product of cart){
    // if(product.quantity ===0){
    //   product.quantity =1;
    // }
    // product.quantity = product.quantity || 1; 
    total = total + (product.price * product.quantity);
    totalShipping = totalShipping + product.shipping;
    quantity = quantity + product.quantity;
  }
  
  const tax =parseFloat ((total *.07).toFixed(2));
  const grandTotal = total+totalShipping+tax;
  // const cart = props.cart;
  //  const {cart} = props;
  return (
    <div className='cart'>
      <h3>Card Summery</h3>
      <p>Selected Item: {quantity}</p>
      <p>Total Price: $ {total}</p>
      <p>Total Shipping charges: $ {totalShipping}</p>
      <p>Tax Amount: ${tax}</p>
      <h4>Grand Total: ${grandTotal}</h4>
      <button onClick={handleClearCart} className='btn-clear-cart'>Clear Cart
      <FontAwesomeIcon className="delete-icon" icon={faTrashAlt} />
      </button>
      {children}
    </div>
  );
};

export default Cart;