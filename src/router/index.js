import Home from '../pages/Home';
import Cart from '../pages/Cart';

export const PATHS = {
  HOME: '/',
  CART: '/cart',
};

export const router = [
  { index: true, element: <Home /> },
  { path: PATHS.CART, element: <Cart /> },
];
