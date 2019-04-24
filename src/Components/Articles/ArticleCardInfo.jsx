import React from 'react';
import { Link } from '@reach/router';

export const ArticleCardInfo = ({ articleInfo }) => {
  return (
    <div>
      <p>
        Author:{' '}
        <Link to={`/users/${articleInfo.author}`}>{articleInfo.author}</Link>
      </p>
      <p>
        Topic:{' '}
        <Link to={`/topics/${articleInfo.topic}`}>{articleInfo.topic}</Link>
      </p>
      <p>Comment Count: {articleInfo.comment_count}</p>
    </div>
  );
};
