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
    </nav>
  );
};
