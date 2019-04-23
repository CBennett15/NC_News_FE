import React from 'react';
// import { Link } from '@reach/router';
import { getArticles } from '../../Api';
import { ArticleList } from './ArticleList';

export class Articles extends React.Component {
  state = {
    articlesList: null,
  };
  componentDidMount() {
    getArticles().then((articles) => {
      this.setState({ articlesList: articles });
    });
  }
  render() {
    const { articlesList } = this.state;

    return (
      <div>
        <h2>Articles...</h2>
        {articlesList && <ArticleList articles={this.state.articlesList} />}
      </div>
    );
  }
}
