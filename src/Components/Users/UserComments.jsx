import React from 'react';
import { getCommentsByUser } from '../../Api';
import { ReturnToAccount } from '../Buttons/ReturnToAccount';
import { CommentCard } from '../Comments/CommentCard';
import { navigate, Link } from '@reach/router';
import { DeleteComment } from '../Buttons/DeleteComment';

export class UserComments extends React.Component {
  state = {
    userComments: null,
    hasDeleted: false,
  };
  componentDidMount() {
    this.getAllCommentsByUser(this.props.username);
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.hasDeleted) {
      this.getAllCommentsByUser(this.props.username);
    }
  }
  render() {
    const { userComments } = this.state;
    const { loggedin } = this.props;
    return (
      <div>
        {userComments && (
          <div>
            <h3>All Comments by {this.props.username}</h3>
            {loggedin && <ReturnToAccount onClick={this.handleClick} />}
          </div>
        )}
        {userComments &&
          userComments.map((comment) => {
            return (
              <div key={comment.comment_id}>
                <p>
                  Article ID:{' '}
                  <Link
                    className="article-link"
                    to={`/articles/${comment.article_id}`}
                  >
                    {comment.article_id}
                  </Link>
                </p>
                <CommentCard
                  key={comment.comment_id}
                  comment={comment}
                  loggedin={this.props.loggedin}
                />
                {loggedin && (
                  <DeleteComment
                    username={this.props.username}
                    comment_id={comment.comment_id}
                    hasDeletedComment={this.hasDeletedComment}
                  />
                )}
              </div>
            );
          })}
      </div>
    );
  }

  handleClick = () => {
    navigate('/myaccount');
  };
  getAllCommentsByUser = () => {
    getCommentsByUser(this.props.username).then((comments) => {
      this.setState({ userComments: comments });
    });
  };
  hasDeletedComment = () => {
    this.setState({ hasDeleted: true });
    alert('this comment has been deleted');
  };
}
