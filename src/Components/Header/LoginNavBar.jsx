import React from 'react';
import { Link } from '@reach/router';

export const LoginNavBar = ({ loggedin }) => {
  return (
    <nav className="loginnavbar">
      {!loggedin && (
        <Link className="loginlink" to="/register">
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
