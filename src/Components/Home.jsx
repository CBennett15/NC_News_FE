import React from 'react';
import { getLatestArticles } from '../Api';
import { ArticleList } from './Articles/ArticleList';

export class Home extends React.Component {
  state = {
    latestArticles: null,
  };
  componentDidMount() {
    getLatestArticles().then((articles) => {
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
