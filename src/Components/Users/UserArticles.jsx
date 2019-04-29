import React from 'react';
import { getArticles } from '../../Api';
import { ArticleList } from '../Articles/ArticleList';
import { navigate } from '@reach/router';
import { ReusableButton } from '../Buttons/ReusableButton';
import { NotFound } from '../Errors/NotFound';

export class UserArticles extends React.Component {
  state = {
    userArticles: null,
    error: null,
  };
  componentDidMount() {
    const { username } = this.props;
    getArticles({ author: `${username}` })
      .then((articles) => {
        this.setState({ userArticles: articles });
      })
      .catch((err) => {
        this.setState({ error: err });
      });
  }
  render() {
    const { userArticles, error } = this.state;
    const { loggedin, username } = this.props;
    return (
      <div>
        <h3>All Articles by {username}</h3>
        {loggedin && (
          <ReusableButton
            onClick={this.handleClick}
            text={'Return To Account'}
          />
        )}
        {error && <NotFound msg={error.response.data.msg} />}
        {userArticles && <ArticleList articles={userArticles} />}
      </div>
    );
  }
  handleClick = () => {
    navigate('/myaccount');
  };
}
