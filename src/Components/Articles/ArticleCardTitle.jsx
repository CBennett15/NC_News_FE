import React from 'react';

export const ArticleCardTitle = ({ articleInfo, voteChange }) => {
  return (
    <div>
      <h4>{articleInfo.title}</h4>
      <p>Body: {articleInfo.body}</p>
      <p>Votes: {articleInfo.votes + voteChange}</p>
    </div>
  );
};
