import React from 'react';
import { Link } from '@reach/router';

export const Home = ({ articles }) => {
  return (
    <div>
      <h2>Home Page...</h2>
      <h3>Latest Articles</h3>
      <div>
        {articles.slice(0, 5).map((article) => {
          return (
            <p key={article.article_id}>
              <Link
                className="article-link"
                to={`articles/${article.article_id}`}
              >
                {article.title}
              </Link>
            </p>
          );
        })}
      </div>
    </div>
  );
};
