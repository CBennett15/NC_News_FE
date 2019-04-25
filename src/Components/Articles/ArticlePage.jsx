import React from 'react';
import { Comments } from '../Comments/Comments';
import { getArticleById, addVoteToArticles } from '../../Api';
import { ArticleCardTitle } from './ArticleCardTitle';
import { ArticleCardInfo } from './ArticleCardInfo';
import { LikeButton } from '../Buttons/LikeButton';
import { DislikeButton } from '../Buttons/DislikeButton';

export class ArticlePage extends React.Component {
  state = {
    articleInfo: null,
    voteChange: 0,
    voteLoading: null,
    voteError: null,
  };
  componentDidMount() {
    getArticleById(this.props.articleid).then((article) => {
      this.setState({ articleInfo: article });
    });
  }
  render() {
    const { articleInfo } = this.state;
    return (
      <div className="articlepage">
        <h3>Article info...</h3>
        {articleInfo && (
          <ArticleCardTitle
            voteChange={this.state.voteChange}
            articleInfo={articleInfo}
          />
        )}
        {this.props.loggedin && (
          <>
            <LikeButton onClick={() => this.handleVoteChange(1)} />
            <DislikeButton onClick={() => this.handleVoteChange(-1)} />
          </>
        )}
        {articleInfo && (
          <>
            <ArticleCardInfo articleInfo={articleInfo} />
            <Comments
              loggedin={this.props.loggedin}
              articleid={this.props.articleid}
            />
          </>
        )}
      </div>
    );
  }
  handleVoteChange = (amount) => {
    addVoteToArticles(this.props.articleid, amount).catch((err) => {
      console.log(err);
    });
    this.setState((prevState) => {
      return { voteChange: prevState.voteChange + amount };
    });
  };
}
