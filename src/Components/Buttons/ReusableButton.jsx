import React from 'react';

export const ReusableButton = ({ onClick, text, value }) => {
  return (
    <button value={value} onClick={onClick}>
      {text}
    </button>
  );
};
