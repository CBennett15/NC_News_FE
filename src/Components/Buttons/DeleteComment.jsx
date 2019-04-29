import React from 'react';
import { deleteComment } from '../../Api';
import { ReusableButton } from './ReusableButton';

export class DeleteComment extends React.Component {
  render() {
    return (
      <ReusableButton
        onClick={this.handleDeleteButton}
        text={'Delete Comment'}
      />
    );
  }
  handleDeleteButton = () => {
    const { comment_id, hasDeletedComment } = this.props;
    deleteComment(comment_id).then(() => {
      hasDeletedComment();
    });
  };
}
