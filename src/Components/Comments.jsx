import React from 'react';

export class Comments extends React.Component {
  state = {
    commentsList: null,
  };
  render() {
    return <h3 className="commentslist">Comments...</h3>;
  }
}
