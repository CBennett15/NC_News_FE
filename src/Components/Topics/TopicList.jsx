import React from 'react';
import { Link } from '@reach/router';

export const TopicList = ({ topics }) => {
  return (
    <div>
      <h2>Topic list</h2>
      <p>
        Click on one of the topics below to view all articles in that category
      </p>
      {topics.map((topic) => {
        return (
          <p key={topic.slug} className="topic_link">
            <Link to={`/topics/${topic.slug}`}>{topic.slug}</Link>
          </p>
        );
      })}
    </div>
  );
};
