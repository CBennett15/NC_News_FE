import React from 'react';
import { Title } from './Title';
import { NavBar } from './NavBar';
// import { LoginNavBar } from './LoginNavBar';

export const Header = () => {
  return (
    <header>
      <Title />
      <NavBar />
      {/* <LoginNavBar loggedin={loggedin} /> */}
    </header>
  );
};
