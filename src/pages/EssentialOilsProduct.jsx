import React from 'react';
import ProductCategory from '../components/ProductCategory';
import itemsData from '../data/essential-oils.json'; // Adjust the path as needed

const EssentialOilsProduct = () => {
  return (
    <div className="product-container">
      <ProductCategory 
        title={'Essential Oils'} 
        items={itemsData}
      />
    </div>
  );
};

export default EssentialOilsProduct;
