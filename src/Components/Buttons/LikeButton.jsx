import React from 'react';

export const LikeButton = ({ onClick, voteChange }) => {
  return (
    <button onClick={onClick} disabled={voteChange === 1}>
      Like!
    </button>
  );
};
