import React, { useEffect, useState } from 'react';
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


  const addToCart =(product)=>{
    console.log(product)
    let newCart = [...cart, product];
    setCart(newCart);
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
        <h3>Card Summery</h3>
        <p>Selected Item: {cart.length}</p>
      </div>
    </div>
  );
};

export default Shop;