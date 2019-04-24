import React from 'react';
import { Link } from '@reach/router';
import { Comments } from '../Comments/Comments';
import { getArticleById } from '../../Api';

export class ArticlePage extends React.Component {
  state = {
    articleInfo: null,
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
          <div>
            <h4>{articleInfo.title}</h4>
            <p>Body: {articleInfo.body}</p>
            <p>
              Author:{' '}
              <Link to={`/users/${articleInfo.author}`}>
                {articleInfo.author}
              </Link>
            </p>
            <p>
              Topic:{' '}
              <Link to={`/topics/${articleInfo.topic}`}>
                {articleInfo.topic}
              </Link>
            </p>
            <p>Comment Count: {articleInfo.comment_count}</p>
            <p>Votes: {articleInfo.votes}</p>
          </div>
        )}
        <Comments articleid={this.props.articleid} />
      </div>
    );
  }
}
