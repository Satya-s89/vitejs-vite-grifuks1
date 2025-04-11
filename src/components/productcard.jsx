import React from 'react';
import ViewProductButton from '../components/button'; 
import './productcard.css'; 

const Productcard = () => {
  const productImage = 'data:image/jpeg;base64,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'; 
  const productName = 'Awesome Gadget';
  const price = '$99.99';

  return (
    <div className="product-card">
      <img src={productImage} alt="Product" className="product-image" />
      <div className="product-details">
        <h2 className="product-name">{productName}</h2>
        <p className="product-price">{price}</p>
        <ViewProductButton />
      </div>
    </div>
  );
};

export default Productcard;