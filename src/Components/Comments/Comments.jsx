import React from 'react';
import { getCommentsByArticle } from '../../Api';
import { CommentCard } from './CommentCard';

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
                <CommentCard
                  key={comment.comment_id}
                  comment={comment}
                  loggedin={this.props.loggedin}
                />
              </div>
            );
          })}
      </div>
    );
  }
}
