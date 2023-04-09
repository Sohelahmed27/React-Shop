import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {addToDb, deleteShoppingCart, getShoppingCart} from '../../utilities/fakedb.js'
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';


const Shop = () => {
  const[products, setProducts]=useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
    .then(res=>res.json())
    .then(data =>setProducts(data))
  }, [])
useEffect(
  ()=>{
   
    const storedCart = getShoppingCart();
    const savedCard = [];
    
    for(const id in storedCart){
      
      const addedProduct = products.find(product => product.id===id);
      if(addedProduct){
        console.log(addedProduct);
        const quantity= storedCart[id];
         addedProduct.quantity = quantity;
        console.log(addedProduct);
        savedCard.push(addedProduct);
      }
    }
    setCart(savedCard);
  }
  ,[products])

  const addToCart =(product)=>{
    // console.log(product)
    let newCart =[];
    // let newCart = [...cart, product];
    //if product doesn't exist set card 1, if exist update the card
    const exist = cart.find(pd => pd.id ===product.id)
    if(!exist){
      product.quantity = 1;
      newCart = [...cart, product];
    }
    else{
      exist.quantity = exist.quantity + 1;
      const remaining = cart.filter(pd => pd.id !== product.id);
      newCart = [...remaining, exist]
    }

    setCart(newCart);
    addToDb(product.id)
    
  }
  //Clear cart
  const handleClearCart = () => {
    setCart([]);
    deleteShoppingCart();
  }
  return (
    <div className='shop'>
      <div className="products-container">
       
        {
          products.map(product =><Product
          key={product.id}
          product={product}
          addToCart={addToCart}></Product>)
        }
      </div>
      <div className="card-container">
      <Cart cart={cart}
      handleClearCart={handleClearCart}
      
      ><Link to='/orders'>
        <button className='order-proceed'>Order Proceed</button>
      </Link></Cart>
      </div>
    </div>
  );
};

export default Shop;