import React from 'react';
import { NavLink } from 'react-router-dom';
import { useProductContext } from '../contexts/productContext';
import { PATHS } from '../router';

const Header = () => {
  const { state } = useProductContext();

  return (
    <header>
      <ul>
        <li>
          <NavLink to={PATHS.HOME}>Home</NavLink>
        </li>
        <li>
          <NavLink to={PATHS.CART}>Cart {state.count}</NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
