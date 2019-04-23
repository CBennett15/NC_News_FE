import React, { Component } from 'react';

import './App.css';
import { Header } from './Components/Header/Header';
import { Router } from '@reach/router';
import { Home } from './Components/Home';
import { Articles } from './Components/Articles/Articles';
import { Topics } from './Components/Topics/Topics';
import { ArticlePage } from './Components/Articles/ArticlePage';
import { TopicPage } from './Components/Topics/TopicPage';
import { UserArticles } from './Components/Users/UserArticles';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Router>
          <Home path="/" />
          <Articles path="/articles" />
          <ArticlePage path="/articles/:articleid" />
          <Topics path="/topics/" />
          <TopicPage path="/topics/:slug" />
          <ArticlePage path="/topics/:slug/:articleid" />
          <UserArticles path="/users/:username" />
        </Router>
      </div>
    );
  }
}

export default App;
