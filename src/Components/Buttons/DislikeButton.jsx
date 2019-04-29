import React from 'react';

export const DislikeButton = ({ onClick, voteChange }) => {
  return (
    <button onClick={onClick} disabled={voteChange === -1}>
      Dislike!
    </button>
  );
};
