import React from 'react';
import {
  getArticles,
  getArticlesSortedByComment,
  getArticlesSortedByVotes,
} from '../../Api';
import { ArticleList } from './ArticleList';

export class Articles extends React.Component {
  state = {
    articlesList: null,
    isSorted: false,
    created_at: null,
    comment_count: null,
    votes: null,
  };
  componentDidMount() {
    this.fetchArticles();
  }

  render() {
    const { articlesList } = this.state;

    return (
      <div>
        <h2>Articles...</h2>
        <button
          name="created_at"
          value="created_at"
          onClick={this.handleCreatedAtClick}
        >
          Sort By Date Created
        </button>
        <button
          name="comment_count"
          value="comment_count"
          onClick={this.handleCommentCountClick}
        >
          Sort By Comment Count
        </button>
        <button name="votes" value="votes" onClick={this.handleVotesClick}>
          Sort By Votes
        </button>
        {articlesList && <ArticleList articles={this.state.articlesList} />}
      </div>
    );
  }
  fetchArticles = () => {
    getArticles().then((articles) => {
      this.setState({ articlesList: articles });
    });
  };
  handleCreatedAtClick = (event) => {
    this.fetchArticles();
  };
  handleCommentCountClick = (event) => {
    getArticlesSortedByComment().then((articles) => {
      this.setState({ articlesList: articles, isSorted: false });
    });
  };

  handleVotesClick = (event) => {
    getArticlesSortedByVotes().then((articles) => {
      this.setState({ articlesList: articles, isSorted: false });
    });
  };
}
