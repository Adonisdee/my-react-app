import React from 'react';
import ProductCategory from '../components/ProductCategory';
import itemsData from '../data/carrier-oils.json'; // Adjust the path as needed

const CarrierOilsProduct = () => {
  return (
    <div className="product-container">
      <ProductCategory 
        title={'Carrier Oils'} 
        items={itemsData}
      />
    </div>
  );
};

export default CarrierOilsProduct;