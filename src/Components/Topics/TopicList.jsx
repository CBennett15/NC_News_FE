import React from 'react';
import { Link, Router } from '@reach/router';
import { TopicPage } from './TopicPage';

export const TopicList = ({ topics, articles }) => {
  return (
    <div>
      <h2>Topic list...</h2>
      {topics.map((topic) => {
        return (
          <p key={topic.slug}>
            <Link to={`/topics/${topic.slug}`}>{topic.slug}</Link>
          </p>
        );
      })}
      <Router>
        <TopicPage articles={articles} topics={topics} path=":slug" />
      </Router>
    </div>
  );
};
