import React from 'react';
import { Link } from '@reach/router';

export const ArticleList = ({ articles }) => {
  return articles.map((article) => {
    return (
      <p key={article.article_id}>
        <Link className="article-link" to={`/articles/${article.article_id}`}>
          {article.title}
        </Link>
      </p>
    );
  });
};
