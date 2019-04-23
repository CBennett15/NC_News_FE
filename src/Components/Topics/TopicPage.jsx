import React from 'react';
import { getArticlesByTopic } from '../../Api';
import { ArticleList } from '../Articles/ArticleList';

export class TopicPage extends React.Component {
  state = {
    topicsArticles: null,
  };
  componentDidMount() {
    getArticlesByTopic(this.props.slug).then((articles) => {
      this.setState({ topicsArticles: articles });
    });
  }
  render() {
    const { topicsArticles } = this.state;
    return (
      <div>
        {topicsArticles && <ArticleList articles={this.state.topicsArticles} />}
      </div>
    );
  }
}
