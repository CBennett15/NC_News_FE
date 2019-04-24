import React from 'react';
import { Link } from '@reach/router';

export const MyArticles = ({ user }) => {
  return (
    <button>
      <Link className="loginlink" to={`/users/${user}`}>
        My Articles
      </Link>
    </button>
  );
};
