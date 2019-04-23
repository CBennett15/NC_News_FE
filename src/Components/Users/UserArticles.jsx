import React from 'react';
import { getArticlesByUser } from '../../Api';

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
    return <h3>Users...</h3>;
  }
}
