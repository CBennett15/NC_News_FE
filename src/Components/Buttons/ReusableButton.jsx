import React from 'react';

export const ReusableButton = ({ onClick, text, value, className }) => {
  return (
    <button className={className} value={value} onClick={onClick}>
      {text}
    </button>
  );
};
