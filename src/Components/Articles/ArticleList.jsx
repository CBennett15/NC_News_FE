import React from 'react';
import { Link } from '@reach/router';

export const ArticleList = ({ articles }) => {
  return articles.map((article) => {
    return (
      <div key={article.article_id} className="article">
        <p>
          <Link className="article-link" to={`/articles/${article.article_id}`}>
            {article.title}
          </Link>
        </p>
        <p className="articleinfo">
          <strong>Comment Count:</strong> {article.comment_count} |
          <strong>Votes:</strong> {article.votes} | <strong>Created On:</strong>{' '}
          {article.created_at.slice(0, 10)}
        </p>
      </div>
    );
  });
};
