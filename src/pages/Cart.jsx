import React from 'react';
import ProductCard from '../components/ProductCard';
import { useProductContext } from '../contexts/productContext';

const Cart = () => {
  const { state } = useProductContext();
  return (
    <div>
      {!state.products.length && 'No Products in the cart'}
      <ul>
        {state?.products?.map((product) => (
          <ProductCard key={product.id} {...{ product }} />
        ))}
      </ul>
      <p>Products in cart: {state?.count}</p>
      <p>total price: {state.products?.reduce((acc, cur) => acc + cur.price, 0)}</p>
    </div>
  );
};

export default Cart;
