import React from 'react';
import { Link } from '@reach/router';

export const TopicList = ({ topics }) => {
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
    </div>
  );
};
