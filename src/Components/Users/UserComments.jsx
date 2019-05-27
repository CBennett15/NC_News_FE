import React from 'react';
import { getCommentsByUser } from '../../Api';
import { CommentCard } from '../Comments/CommentCard';
import { navigate, Link } from '@reach/router';
import { DeleteComment } from '../Buttons/DeleteComment';
import { ReusableButton } from '../Buttons/ReusableButton';
import { NotFound } from '../Errors/NotFound';

export class UserComments extends React.Component {
  state = {
    userComments: null,
    error: null,
  };
  componentDidMount() {
    const { username } = this.props;
    this.getAllCommentsByUser(username);
  }

  render() {
    const { userComments, error } = this.state;
    const { loggedin, username } = this.props;
    return (
      <div>
        <div>
          <h3>All Comments by {username}</h3>
          {loggedin && (
            <ReusableButton
              onClick={this.handleClick}
              text={'Return To Account'}
            />
          )}
        </div>
        {error && <NotFound msg={error.response.data.msg} />}
        {userComments &&
          userComments.map((comment) => {
            return (
              <div key={comment.comment_id} className="commentbody">
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
                  loggedin={loggedin}
                />
                {loggedin && (
                  <DeleteComment
                    username={username}
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
    const { username } = this.props;
    getCommentsByUser(username)
      .then((comments) => {
        this.setState({ userComments: comments });
      })
      .catch((err) => {
        this.setState({ error: err });
      });
  };
  hasDeletedComment = (comment_id) => {
    const newUserList = this.state.userComments.filter(
      (comment) => comment.comment_id !== comment_id,
    );
    this.setState({ userComments: newUserList });
  };
}
