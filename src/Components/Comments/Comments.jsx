import React from 'react';
import { getCommentsByArticle, addVoteToComments } from '../../Api';
import { CommentCard } from './CommentCard';
import { LikeButton } from '../Buttons/LikeButton';
import { DislikeButton } from '../Buttons/DislikeButton';

export class Comments extends React.Component {
  state = {
    commentsList: null,
    voteChange: 0,
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
              <>
                <CommentCard
                  handleVoteChange={this.handleVoteChange}
                  key={comment.comment_id}
                  comment={comment}
                  voteChange={this.state.voteChange}
                />
                {this.props.loggedin && (
                  <>
                    <LikeButton onClick={() => this.handleVoteChange(1)} />
                    <DislikeButton onClick={() => this.handleVoteChange(-1)} />
                  </>
                )}
              </>
            );
          })}
      </div>
    );
  }
  handleVoteChange = (amount) => {
    addVoteToComments(this.props.comment_id, amount).catch((err) => {
      console.log(err);
    });
    this.setState((prevState) => {
      return { voteChange: prevState.voteChange + amount };
    });
  };
}
