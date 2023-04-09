import React from 'react';
import './ReviewItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const ReviewItem = ({product, handleRemoveCart}) => {
  console.log(product)
  const {id, img,price, name,quantity }=product;
  return (
    <div className="review-item">
      
      <img src={img}></img>
      <div className="review-detail">
          <p className="product-title">{name}</p>
          <p>Price: <span className="orange-text">{price}</span></p>
          <p>Order Quantity: <span className="orange-text">{quantity}</span></p>
        </div>
      <button onClick={() =>handleRemoveCart(id)} className='btn-delete'>
      <FontAwesomeIcon className="delete-icon" icon={faTrashAlt} />
      </button>
      

      
    </div>
  );
};

export default ReviewItem;