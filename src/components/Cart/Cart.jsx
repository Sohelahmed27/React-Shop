import React from 'react';

const Cart = ({cart}) => {
  // const cart = props.cart;
  //  const {cart} = props;
  return (
    <div>
      <h3>Card Summery</h3>
      <p>Selected Item: {cart.length}</p>
    </div>
  );
};

export default Cart;