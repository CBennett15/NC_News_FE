import React from 'react';

export const ReusableButton = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};
