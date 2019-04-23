import React from 'react';
import { Link } from '@reach/router';

export const LoginNavBar = ({ loggedin }) => {
  return (
    <nav>
      <Link className="link" to="/register">
        Sign Up
      </Link>
      {loggedin && (
        <Link className="link" to="/myaccount">
          My Account
        </Link>
      )}
    </nav>
  );
};
