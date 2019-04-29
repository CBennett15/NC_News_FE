import React from 'react';
import { addVoteToComments } from '../../Api';
import { LikeButton } from '../Buttons/LikeButton';
import { DislikeButton } from '../Buttons/DislikeButton';
import { DeleteComment } from '../Buttons/DeleteComment';

export class CommentCard extends React.Component {
  state = {
    voteChange: 0,
    error: null,
    hasDeleted: null,
  };

  render() {
    const { comment, loggedin, username } = this.props;
    const { voteChange } = this.state;

    return (
      <div key={comment.comment_id}>
        <p>Comment: {comment.body}</p>
        <p>Author: {comment.author}</p>
        <p>{comment.created_at.slice(0, 10)}</p>
        <p>Votes: {comment.votes + voteChange}</p>
        {loggedin && (
          <>
            <LikeButton
              onClick={() => this.handleVoteChange(1)}
              voteChange={voteChange}
            />
            <DislikeButton
              onClick={() => this.handleVoteChange(-1)}
              voteChange={voteChange}
            />
            {username === comment.author && (
              <DeleteComment
                comment_id={comment.comment_id}
                hasDeletedComment={this.hasDeletedComment}
              />
            )}
          </>
        )}
      </div>
    );
  }
  handleVoteChange = (amount) => {
    const { comment } = this.props;
    addVoteToComments(comment.comment_id, amount).catch((err) => {
      this.setState({ error: err });
    });
    this.setState((prevState) => {
      return { voteChange: prevState.voteChange + amount };
    });
  };
  hasDeletedComment = () => {
    this.setState({ hasDeleted: true });
    alert('this comment has been deleted');
  };
}
