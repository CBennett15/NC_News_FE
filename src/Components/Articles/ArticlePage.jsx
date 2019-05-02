import React from 'react';
import { Comments } from '../Comments/Comments';
import { getArticleById, addVoteToArticles } from '../../Api';
import { ArticleCardTitle } from './ArticleCardTitle';
import { ArticleCardInfo } from './ArticleCardInfo';
import { LikeButton } from '../Buttons/LikeButton';
import { DislikeButton } from '../Buttons/DislikeButton';
import { NotFound } from '../Errors/NotFound';

export class ArticlePage extends React.Component {
  state = {
    articleInfo: null,
    voteChange: 0,
    error: null,
  };
  componentDidMount() {
    const { articleid } = this.props;
    getArticleById(articleid)
      .then((article) => {
        this.setState({ articleInfo: article });
      })
      .catch((err) => {
        this.setState({ error: err });
      });
  }
  render() {
    const { articleInfo, voteChange, error } = this.state;
    const { loggedin, articleid, user } = this.props;
    return (
      <div className="articlepage">
        <h3>Article</h3>
        {error && <NotFound msg={error.response.data.msg} />}
        {articleInfo && (
          <ArticleCardTitle voteChange={voteChange} articleInfo={articleInfo} />
        )}
        {loggedin && (
          <>
            <LikeButton
              onClick={() => this.handleVoteChange(1)}
              voteChange={voteChange}
            />
            <DislikeButton
              onClick={() => this.handleVoteChange(-1)}
              voteChange={voteChange}
            />
          </>
        )}
        {articleInfo && (
          <>
            <ArticleCardInfo articleInfo={articleInfo} />
            <Comments
              loggedin={loggedin}
              articleid={articleid}
              username={user}
            />
          </>
        )}
      </div>
    );
  }
  handleVoteChange = (amount) => {
    const { articleid } = this.props;
    addVoteToArticles(articleid, amount).catch((err) => {
      this.setState({ error: err });
    });
    this.setState((prevState) => {
      return { voteChange: prevState.voteChange + amount };
    });
  };
}
