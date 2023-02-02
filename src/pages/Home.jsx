import React from 'react';
import { products } from '../mock/products';
import { useProductContext } from '../contexts/productContext';
import ProductCard from '../components/ProductCard';

const Home = () => {
  return (
    <div>
      <ul>
        {products.map((product) => (
          // <ProductCard product={product} />
          <ProductCard key={product.id} {...{ product }} />
        ))}
      </ul>
    </div>
  );
};

export default Home;
