import React from 'react';
import Axios from 'axios';
import { Comments } from '../Comments';

export class ArticlePage extends React.Component {
  state = {
    articleInfo: null,
  };
  componentDidMount() {
    const url = `https://nc-news-server-2019.herokuapp.com/api/articles/${
      this.props.articleid
    }`;

    Axios.get(url).then(({ data: { article } }) => {
      this.setState({ articleInfo: article });
    });
  }
  render() {
    const { articleInfo } = this.state;
    return (
      <div className="articlepage">
        <h3>Article info...</h3>
        {articleInfo && (
          <div>
            <h4>{articleInfo.title}</h4>
            <p>Body: {articleInfo.body}</p>
            <p>Author: {articleInfo.author}</p>
            <p>Topic: {articleInfo.topic}</p>
            <p>Comment Count: {articleInfo.comment_count}</p>
            <p>Votes: {articleInfo.votes}</p>
          </div>
        )}
        <Comments />
      </div>
    );
  }
}
