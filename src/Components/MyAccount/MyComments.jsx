import React from 'react';
import { Link } from '@reach/router';

export const MyComments = ({ user }) => {
  return (
    <button>
      <Link className="loginlink" to={`/users/${user}/comments`}>
        My Comments
      </Link>
    </button>
  );
};
