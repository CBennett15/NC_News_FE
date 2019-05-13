import React from 'react';
import { getArticles } from '../Api';
import { ArticleList } from './Articles/ArticleList';
import { Loading } from './Loading';

export class Home extends React.Component {
  state = {
    latestArticles: null,
    isLoading: true,
  };
  componentDidMount() {
    getArticles({ limit: 5 }).then((articles) => {
      this.setState({ latestArticles: articles, isLoading: false });
    });
  }
  render() {
    const { latestArticles, isLoading } = this.state;
    if (isLoading) return <Loading />;
    return (
      <div>
        <h3>Latest Articles</h3>
        {latestArticles && <ArticleList articles={latestArticles} />}
      </div>
    );
  }
}
