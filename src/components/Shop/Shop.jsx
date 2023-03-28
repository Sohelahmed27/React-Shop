import React, { useEffect, useState } from 'react';
import {addToDb, getShoppingCart} from '../../utilities/fakedb.js'
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
    const storedCart =getShoppingCart();
    console.log(storedCart);
  }
  ,[])

  const addToCart =(product)=>{
    console.log(product)
    let newCart = [...cart, product];
    setCart(newCart);
    addToDb(product.id)
    
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
      <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;