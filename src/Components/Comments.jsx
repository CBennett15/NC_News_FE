import React from 'react';
import { getCommentsByArticle } from '../Api';

export class Comments extends React.Component {
  state = {
    commentsList: null,
  };
  componentDidMount() {
    getCommentsByArticle(this.props.articleid).then((comments) => {
      this.setState({ commentsList: comments });
    });
  }
  render() {
    return (
      <div>
        <h3 className="commentslist">Comments...</h3>
        {this.state.commentsList &&
          this.state.commentsList.map((comment) => {
            return (
              <div key={comment.comment_id}>
                <p>{comment.author}</p>
                <p>{comment.body}</p>
                <p>{comment.created_at}</p>
                <p>{comment.votes}</p>
              </div>
            );
          })}
      </div>
    );
  }
}
