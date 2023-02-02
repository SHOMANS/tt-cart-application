import { createContext } from 'react';
import { products } from '../mock/products';

export const productContext = createContext(null);

const ProductProvider = ({ children }) => {
  return <productContext.Provider value={products}>{children}</productContext.Provider>;
};

export default ProductProvider;
