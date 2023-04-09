import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css'

const Orders = () => {
  
  const savedCart = useLoaderData();
  const [cart, setCart] =useState(savedCart);
  console.log(savedCart);

  const handleRemoveCart = (id) =>{
    console.log(id);
    const remaining = cart.filter(pd =>pd.id!==id);
    setCart(remaining);
    removeFromDb(id);

  }
  return (
    <div className='shop'>
      <div className="review-container">
       {
        cart.map((product=><ReviewItem
        key= {product.id}
        product={product}
        handleRemoveCart={handleRemoveCart}
        ></ReviewItem>))
       }
       
      </div>
      <div className="cart-container">
      <Cart cart={cart}></Cart>
      </div>
    </div> 
  );
};

export default Orders;