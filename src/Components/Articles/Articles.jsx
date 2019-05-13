import React from 'react';
import { getArticles } from '../../Api';
import { ArticleList } from './ArticleList';
import { NotFound } from '../Errors/NotFound';
import { ReusableButton } from '../Buttons/ReusableButton';
import { Loading } from '../Loading';

export class Articles extends React.Component {
  state = {
    articlesList: null,
    error: null,
    isLoading: true,
  };
  componentDidMount() {
    this.fetchArticles({});
    this.setState({ isLoading: false });
  }

  render() {
    const { articlesList, error, isLoading } = this.state;
    if (isLoading) return <Loading />;
    return (
      <div>
        <h2>All Articles</h2>
        <ReusableButton
          value="created_at"
          onClick={this.handleClick}
          text="Sort By Date Created"
        />
        <ReusableButton
          value="comment_count"
          onClick={this.handleClick}
          text="Sort By Comment Count"
        />
        <ReusableButton
          value="votes"
          onClick={this.handleClick}
          text="Sort By Votes"
        />
        {articlesList && <ArticleList articles={articlesList} />}
        {error && <NotFound msg={error.response.data.msg} />}
      </div>
    );
  }
  fetchArticles = (params) => {
    return getArticles(params)
      .then((articles) => {
        this.setState({ articlesList: articles });
      })
      .catch((err) => {
        this.setState({ error: err });
      });
  };
  handleClick = (event) => {
    this.fetchArticles({ sort_by: event.target.value });
  };
}
