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
    if (
      this.state.hasSubmitted &&
      this.state.newComment !== prevState.newComment
    ) {
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
                  loggedin={this.props.loggedin}
                />
              </div>
            );
          })}
      </div>
    );
  }
  getComments = () => {
    getCommentsByArticle(this.props.articleid).then((comments) => {
      this.setState({ commentsList: comments });
    });
  };
  submitComment = (comment) => {
    this.setState({ newComment: comment, hasSubmitted: true });
  };
}
