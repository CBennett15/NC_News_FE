import React from 'react';
import { getArticlesByUser } from '../../Api';
import { ArticleList } from '../Articles/ArticleList';
import { navigate } from '@reach/router';
import { ReusableButton } from '../Buttons/ReusableButton';

export class UserArticles extends React.Component {
  state = {
    userArticles: null,
  };
  componentDidMount() {
    const { username } = this.props;
    getArticlesByUser(username).then((articles) => {
      this.setState({ userArticles: articles });
    });
  }
  render() {
    const { userArticles } = this.state;
    const { loggedin, username } = this.props;
    return (
      <div>
        {userArticles && (
          <div>
            <h3>All Articles by {username}</h3>
            {loggedin && (
              <ReusableButton
                onClick={this.handleClick}
                text={'Return To Account'}
              />
            )}
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
