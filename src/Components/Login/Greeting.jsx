import React from 'react';

export const Greeting = ({ user, loggedin }) => {
  if (loggedin) return <p className="greeting">Hi {user}!</p>;
  return <p className="greeting">Hi Guest!</p>;
};
