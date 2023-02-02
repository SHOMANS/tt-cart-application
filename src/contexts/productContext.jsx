import { createContext, useContext } from 'react';
import { products } from '../mock/products';

const productContext = createContext(null);

export const useProductContext = () => {
  return useContext(productContext);
};

const ProductProvider = ({ children }) => {
  return <productContext.Provider value={products}>{children}</productContext.Provider>;
};

export default ProductProvider;
