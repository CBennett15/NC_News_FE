import React from 'react';
import { getCommentsByArticle, addNewComment } from '../../Api';
import { CommentCard } from './CommentCard';
import { AddComment } from './AddComment';

export class Comments extends React.Component {
  state = {
    commentsList: null,
    newComment: null,
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
        {this.props.loggedin && (
          <AddComment
            handleTyping={this.handleTyping}
            handleSubmit={this.handleSubmit}
          />
        )}
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
  handleTyping = (event) => {
    const value = event.target.value;
    this.setState({ newComment: value });
  };
  handleSubmit = (event) => {
    const { articleid, username } = this.props;
    const { newComment } = this.state;
    event.preventDefault();
    addNewComment(articleid, {
      username: username,
      body: newComment,
    })
      .then((comment) => {
        console.log(comment);
      })
      .catch((err) => {
        console.dir(err);
      });
  };
}
