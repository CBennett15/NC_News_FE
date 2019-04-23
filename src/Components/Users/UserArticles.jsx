import React from 'react';
import { getArticlesByUser } from '../../Api';
import { ArticleList } from '../Articles/ArticleList';

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
    console.log(userArticles);
    return (
      <div>
        {userArticles && (
          <div>
            <h3>All Articles by {this.props.username}</h3>
            <ArticleList articles={userArticles} />
          </div>
        )}
      </div>
    );
  }
}
