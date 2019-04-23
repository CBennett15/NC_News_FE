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
import { LoginScreen } from './Components/Login/LoginScreen';
import { MyAccount } from './Components/My Account/MyAccount';

class App extends Component {
  state = {
    username: '',
  };
  render() {
    return (
      <div className="App">
        <LoginScreen logInUser={this.logInUser} />
        <Header />
        <Router>
          <Home path="/" />
          <Articles path="/articles" />
          <ArticlePage path="/articles/:articleid" />
          <Topics path="/topics/" />
          <TopicPage path="/topics/:slug" />
          <UserArticles path="/users/:username" />
          <MyAccount loggedin={this.state.username} path="/myaccount" />}
        </Router>
      </div>
    );
  }
  logInUser = (username) => {
    this.setState({ username });
  };
}

export default App;
