import React, { Component } from 'react';
import Axios from 'axios';

import './App.css';
import { Header } from './Components/Header/Header';
import { Router } from '@reach/router';
import { Home } from './Components/Home';
import { Articles } from './Components/Articles/Articles';
import { Topics } from './Components/Topics/Topics';
import { ArticlePage } from './Components/Articles/ArticlePage';
import { TopicPage } from './Components/Topics/TopicPage';

class App extends Component {
  state = {
    articlesList: null,
  };
  componentDidMount() {
    const url = 'https://nc-news-server-2019.herokuapp.com/api/articles';
    Axios.get(url).then(({ data: { articles } }) => {
      this.setState({ articlesList: articles });
    });
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Router>
          {this.state.articlesList && (
            <Home articles={this.state.articlesList} path="/" />
          )}
          <Articles article={this.state.articlesList} path="/articles" />
          <ArticlePage path="/articles/:articleid" />
          <Topics path="/topics" />
          {this.state.articlesList && (
            <TopicPage
              articles={this.state.articlesList}
              path="/topics/:slug"
            />
          )}
        </Router>
      </div>
    );
  }
}

export default App;
