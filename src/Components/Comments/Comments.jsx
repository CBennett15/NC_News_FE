import React from 'react';
import { getCommentsByArticle } from '../../Api';
import { CommentCard } from './CommentCard';
import { AddComment } from './AddComment';

export class Comments extends React.Component {
  state = {
    commentsList: null,
    newComment: null,
    hasSubmitted: false,
  };
  componentDidMount() {
    this.getComments();
  }
  componentDidUpdate(prevProps, prevState) {
    const { hasSubmitted, newComment } = this.state;
    if (hasSubmitted && newComment !== prevState.newComment) {
      this.getComments();
    }
  }
  render() {
    const { username, loggedin, articleid } = this.props;
    const { commentsList } = this.state;
    return (
      <div>
        <h3 className="commentslist">Comments...</h3>
        {loggedin && (
          <AddComment
            username={username}
            articleid={articleid}
            submitComment={this.submitComment}
          />
        )}
        {commentsList &&
          commentsList.map((comment) => {
            return (
              <div key={comment.comment_id}>
                <CommentCard
                  key={comment.comment_id}
                  comment={comment}
                  loggedin={loggedin}
                  username={username}
                  hasDeletedComment={this.hasDeletedComment}
                />
              </div>
            );
          })}
      </div>
    );
  }
  getComments = () => {
    const { articleid } = this.props;
    getCommentsByArticle(articleid)
      .then((comments) => {
        this.setState({ commentsList: comments });
      })
      .catch((err) => {
        this.setState({ error: err });
      });
  };
  submitComment = (comment) => {
    this.setState({ newComment: comment, hasSubmitted: true });
  };
  hasDeletedComment = (comment_id) => {
    const newCommentsList = this.state.commentsList.filter(
      (comment) => comment.comment_id !== comment_id,
    );
    this.setState({ commentsList: newCommentsList });
    alert('this comment has been deleted');
  };
}
