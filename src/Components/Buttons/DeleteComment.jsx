import React from 'react';
import { deleteComment } from '../../Api';

export class DeleteComment extends React.Component {
  render() {
    return <button onClick={this.handleDeleteButton}>Delete Comment</button>;
  }
  handleDeleteButton = () => {
    deleteComment(this.props.comment_id).then(() => {
      this.props.hasDeletedComment();
    });
  };
}

//have got it working but just not refreshing page
