import React from 'react';
import { Link } from '@reach/router';

export const NavBar = () => {
  return (
    <nav>
      <Link className="link" to="/">
        Home
      </Link>
      <Link className="link" to="/articles">
        All Articles
      </Link>
      <Link className="link" to="/topics">
        Topics
      </Link>
      <Link className="link" to="/login">
        Login
      </Link>
      <Link className="link" to="/register">
        Sign Up
      </Link>
    </nav>
  );
};
