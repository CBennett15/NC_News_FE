import React from 'react';
import { getArticles } from '../Api';
import { ArticleList } from './Articles/ArticleList';

export class Home extends React.Component {
  state = {
    latestArticles: null,
  };
  componentDidMount() {
    getArticles({ limit: 5 }).then((articles) => {
      this.setState({ latestArticles: articles });
    });
  }
  render() {
    const { latestArticles } = this.state;
    return (
      <div>
        <h2>Home Page...</h2>
        <h3>Latest Articles</h3>
        {latestArticles && <ArticleList articles={latestArticles} />}
      </div>
    );
  }
}
