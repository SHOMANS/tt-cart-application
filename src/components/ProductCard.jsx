import React from 'react';
import { useProductContext } from '../contexts/productContext';

const ProductCard = ({ product }) => {
  const {
    state: { products },
    addToCart,
    removeFromCart,
  } = useProductContext();

  const isExistInCart = () => products.find((item) => item.id === product.id);

  const toggleCart = () => {
    isExistInCart() ? removeFromCart(product.id) : addToCart(product);
  };

  return (
    <li>
      <br />

      <h3>
        name: {product.name} <button onClick={toggleCart}>{isExistInCart() ? '-' : '+'}</button>
      </h3>
      <p>name: {product.description}</p>
      <span>price: {product.price}</span>
      <br />
    </li>
  );
};

export default ProductCard;
