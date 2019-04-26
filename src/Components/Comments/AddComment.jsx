import React from 'react';
import { AddCommentForm } from './AddCommentForm';
import { addNewComment } from '../../Api';

export class AddComment extends React.Component {
  state = {
    commentInput: '',
    error: null,
  };
  render() {
    return (
      <AddCommentForm
        handleTyping={this.handleTyping}
        handleSubmit={this.handleSubmit}
        error={this.state.error}
      />
    );
  }
  handleTyping = (event) => {
    const value = event.target.value;
    this.setState({ commentInput: value });
  };
  handleSubmit = (event) => {
    const { articleid, username } = this.props;
    const { commentInput } = this.state;
    event.preventDefault();
    addNewComment(articleid, {
      username: username,
      body: commentInput,
    })
      .then((comment) => {
        this.props.submitComment(comment);
        this.setState({ error: null });
      })
      .catch((err) => {
        this.setState({ error: err });
      });
  };
}
