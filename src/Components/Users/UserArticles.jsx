import React from 'react';
import { getArticlesByUser } from '../../Api';
import { ArticleList } from '../Articles/ArticleList';
import { ReturnToAccount } from '../Buttons/ReturnToAccount';
import { navigate } from '@reach/router';

export class UserArticles extends React.Component {
  state = {
    userArticles: null,
  };
  componentDidMount() {
    getArticlesByUser(this.props.username).then((articles) => {
      this.setState({ userArticles: articles });
    });
  }
  render() {
    const { userArticles } = this.state;
    const { loggedin } = this.props;
    return (
      <div>
        {userArticles && (
          <div>
            <h3>All Articles by {this.props.username}</h3>
            {loggedin && <ReturnToAccount onClick={this.handleClick} />}
            <ArticleList articles={userArticles} />
          </div>
        )}
      </div>
    );
  }
  handleClick = () => {
    navigate('/myaccount');
  };
}
