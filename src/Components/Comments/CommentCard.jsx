import React from 'react';

export const CommentCard = ({ comment, voteChange }) => {
  return (
    <div key={comment.comment_id}>
      <p>Comment: {comment.body}</p>
      <p>Author: {comment.author}</p>
      <p>{comment.created_at}</p>
      <p>Votes: {comment.votes + voteChange}</p>
    </div>
  );
};
