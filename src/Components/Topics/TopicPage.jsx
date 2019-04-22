import React from 'react';

export const TopicPage = ({ articles }) => {
  return (
    <div>
      {articles
        .filter((article) => {
          return article.topic === 'coding';
        })
        .map((article) => {
          return <p key={article.article_id}>{article.title}</p>;
        })}
    </div>
  );
};
