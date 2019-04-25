import React from 'react';
import { getCommentsByUser } from '../../Api';
import { ReturnToAccount } from '../Buttons/ReturnToAccount';
import { CommentCard } from '../Comments/CommentCard';
import { navigate, Link } from '@reach/router';

export class UserComments extends React.Component {
  state = {
    userComments: null,
  };
  componentDidMount() {
    getCommentsByUser(this.props.username).then((comments) => {
      this.setState({ userComments: comments });
    });
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
              </div>
            );
          })}
      </div>
    );
  }

  handleClick = () => {
    navigate('/myaccount');
  };
}
