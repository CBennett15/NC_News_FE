import React from 'react';
import { getCommentsByArticle } from '../../Api';
import { CommentCard } from './CommentCard';

export class Comments extends React.Component {
  state = {
    commentsList: null,
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
          this.state.commentsList.map(() => {
            return <CommentCard comment={this.state.commentsList} />;
          })}
      </div>
    );
  }
}
