import React from 'react';
import { NavLink } from 'react-router-dom';
import { PATHS } from '../router';

const Header = () => {
  return (
    <header>
      <ul>
        <li>
          <NavLink to={PATHS.HOME}>Home</NavLink>
        </li>
        <li>
          <NavLink to={PATHS.CART}>Cart</NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
