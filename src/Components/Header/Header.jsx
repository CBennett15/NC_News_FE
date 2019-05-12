import React from 'react';
import { Title } from './Title';
import { NavBar } from './NavBar';

export const Header = ({ loggedin }) => {
  return (
    <header>
      <Title />
      <NavBar loggedin={loggedin} />
    </header>
  );
};
