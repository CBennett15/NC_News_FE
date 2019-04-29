import React from 'react';
import { getArticles } from '../../Api';
import { ArticleList } from '../Articles/ArticleList';
import { NotFound } from '../Errors/NotFound';

export class TopicPage extends React.Component {
  state = {
    topicsArticles: null,
    error: null,
  };
  componentDidMount() {
    const { slug } = this.props;
    getArticles({ topic: `${slug}` })
      .then((articles) => {
        this.setState({ topicsArticles: articles });
      })
      .catch((err) => {
        this.setState({ error: err });
      });
  }
  render() {
    const { topicsArticles, error } = this.state;
    return (
      <div>
        {topicsArticles && <ArticleList articles={topicsArticles} />}
        {error && <NotFound msg={error.response.data.msg} />}
      </div>
    );
  }
}
