import React from 'react';

export const NotFound = ({ msg }) => {
  if (msg) return <p>{msg}</p>;
  else return <h2>Oops Page Not Found </h2>;
};
