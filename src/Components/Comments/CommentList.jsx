import React from 'react';
import { CommentCard } from './CommentCard';

export const CommentList = ({ comments, loggedin }) => {
  comments.map((comment) => {
    return (
      <div key={comment.comment_id}>
        <CommentCard
          key={comment.comment_id}
          comment={comment}
          loggedin={this.props.loggedin}
        />
      </div>
    );
  });
};
