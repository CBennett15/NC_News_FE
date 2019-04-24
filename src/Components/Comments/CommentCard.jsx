import React from 'react';

export const CommentCard = ({ comment }) => {
  return (
    <div key={comment.comment_id}>
      <p>{comment.author}</p>
      <p>{comment.body}</p>
      <p>{comment.created_at}</p>
      <p>{comment.votes}</p>
    </div>
  );
};
