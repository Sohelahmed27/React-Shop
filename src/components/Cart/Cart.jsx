import React from 'react';
import './Cart.css'
const Cart = ({cart}) => {
  console.log(cart);
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
    </div>
  );
};

export default Cart;