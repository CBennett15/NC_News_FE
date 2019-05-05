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
        <p className="articlebody">
          {article.body.replace(/(.{120})..+/, '$1...')}
        </p>
        <p>
          Comment Count: {article.comment_count}, Votes: {article.votes} created
          on: {article.created_at.slice(0, 10)}
        </p>
      </div>
    );
  });
};
