import React from 'react';
import { Link } from '@reach/router';
import { getLatestArticles } from '../Api';
// import { Articles } from './Articles/Articles';

export class Home extends React.Component {
  state = {
    latestArticles: null,
  };
  componentDidMount() {
    getLatestArticles().then((articles) => {
      this.setState({ latestArticles: articles });
    });
  }
  render() {
    const { latestArticles } = this.state;
    return (
      <div>
        <h2>Home Page...</h2>
        <h3>Latest Articles</h3>
        {latestArticles && (
          <div>
            {latestArticles.map((article) => {
              return (
                <p key={article.article_id}>
                  <Link
                    className="article-link"
                    to={`articles/${article.article_id}`}
                  >
                    {article.title}
                  </Link>
                </p>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}
