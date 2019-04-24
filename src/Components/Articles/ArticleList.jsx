import React from 'react';
import { Link } from '@reach/router';

export const ArticleList = ({ articles }) => {
  return articles.map((article) => {
    return (
      <div key={article.article_id}>
        <p>
          <Link className="article-link" to={`/articles/${article.article_id}`}>
            {article.title}
          </Link>
        </p>
        <p className="articlebody">{article.body}</p>
      </div>
    );
  });
};
