import React from 'react';
import { addVoteToComments } from '../../Api';
import { LikeButton } from '../Buttons/LikeButton';
import { DislikeButton } from '../Buttons/DislikeButton';

export class CommentCard extends React.Component {
  state = {
    voteChange: 0,
    error: null,
  };

  render() {
    const { comment, loggedin } = this.props;
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
}
