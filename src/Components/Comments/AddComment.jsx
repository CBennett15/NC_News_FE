import React from 'react';
import { AddCommentForm } from './AddCommentForm';
import { addNewComment } from '../../Api';

export class AddComment extends React.Component {
  state = {
    commentInput: '',
    error: null,
  };
  render() {
    const { error } = this.state;
    return (
      <AddCommentForm
        handleTyping={this.handleTyping}
        handleSubmit={this.handleSubmit}
        error={error}
      />
    );
  }
  handleTyping = (event) => {
    const value = event.target.value;
    this.setState({ commentInput: value });
  };
  handleSubmit = (event) => {
    const { articleid, username, submitComment } = this.props;
    const { commentInput } = this.state;
    event.preventDefault();
    event.target.reset();
    addNewComment(articleid, {
      username: username,
      body: commentInput,
    })
      .then((comment) => {
        submitComment(comment);
        this.setState({ commentInput: '', error: null });
      })
      .catch((err) => {
        this.setState({ error: err });
      });
  };
}
