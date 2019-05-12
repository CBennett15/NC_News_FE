import React from 'react';
import { Link } from '@reach/router';

export const NavBar = ({ loggedin }) => {
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
      {!loggedin && (
        <Link className="link" to="/register">
          Sign Up
        </Link>
      )}
      {loggedin && (
        <Link className="loginlink" to="/myaccount">
          <i className="fas fa-user" />
          My Account
        </Link>
      )}
    </nav>
  );
};
