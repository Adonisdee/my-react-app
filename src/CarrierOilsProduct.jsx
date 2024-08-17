import React from 'react';

const CarrierOilsProduct = () => {
  return (
    <div className="product-container">
      <h1>Argan Oil</h1>
      <p>Pure Argan Oil - 100ml</p>
      <p>Price: $20</p>
      <img src={process.env.PUBLIC_URL + '/assets/images/argan-oil.jpg'} alt="Argan Oil" />
      <button>Add to Cart</button>
    </div>
  );
};

export default CarrierOilsProduct;
