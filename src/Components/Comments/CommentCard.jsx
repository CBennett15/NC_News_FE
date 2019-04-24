import React from 'react';
import { LikeButton } from '../Buttons/LikeButton';
import { DislikeButton } from '../Buttons/DislikeButton';

export const CommentCard = ({ comment, handleVoteChange }) => {
  return (
    <div key={comment.comment_id}>
      <p>Comment: {comment.body}</p>
      <p>Author: {comment.author}</p>
      <p>{comment.created_at}</p>
      <p>Votes: {comment.votes}</p>
      <LikeButton onClick={() => handleVoteChange(1)} />
      <DislikeButton onClick={() => handleVoteChange(-1)} />
    </div>
  );
};
