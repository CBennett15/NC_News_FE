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
import { LoginNavBar } from './Components/Header/LoginNavBar';
import { RegisterScreen } from './Components/Register/RegisterScreen';
import { Greeting } from './Components/Login/Greeting';
// import { MyAccount } from './Components/MyAccount/MyAccount';

class App extends Component {
  state = {
    username: '',
    isUserLoggedIn: false,
  };
  render() {
    return (
      <div className="App">
        <LoginScreen
          logInUser={this.logInUser}
          loggedin={this.state.isUserLoggedIn}
        />
        <Greeting
          user={this.state.username}
          loggedin={this.state.isUserLoggedIn}
        />
        <LoginNavBar loggedin={this.state.isUserLoggedIn} />
        <Header />
        <Router>
          <Home path="/" />
          <Articles path="/articles" />
          <ArticlePage path="/articles/:articleid" />
          <Topics path="/topics/" />
          <TopicPage path="/topics/:slug" />
          <UserArticles path="/users/:username" />
          <RegisterScreen logInUser={this.logInUser} path="/register" />
          {/* <MyAccount path="/myaccount" />} */}
        </Router>
      </div>
    );
  }
  logInUser = (username) => {
    if (username) {
      this.setState({ username: username, isUserLoggedIn: true });
    } else {
      this.setState({ username: '', isUserLoggedIn: false });
    }
  };
}

export default App;
