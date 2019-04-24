import React, { Component } from 'react';

import './App.css';
import { Header } from './Components/Header/Header';
import { Router, navigate } from '@reach/router';
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
import { MyAccountPage } from './Components/MyAccount/MyAccountPage';
import { Comments } from './Components/Comments/Comments';

class App extends Component {
  state = {
    username: '',
    isUserLoggedIn: false,
  };
  render() {
    const { username, isUserLoggedIn } = this.state;
    return (
      <div className="App">
        <LoginScreen
          logInUser={this.logInUser}
          loggedin={isUserLoggedIn}
          logOutUser={this.logOutUser}
        />
        <Greeting user={username} loggedin={isUserLoggedIn} />
        <LoginNavBar loggedin={isUserLoggedIn} />
        <Header />
        <Router>
          <Home path="/" />
          <Articles path="/articles" />
          <ArticlePage loggedin={isUserLoggedIn} path="/articles/:articleid" />
          <Topics path="/topics/" />
          <TopicPage path="/topics/:slug" />
          <UserArticles path="/users/:username" />
          <RegisterScreen logInUser={this.logInUser} path="/register" />
          {isUserLoggedIn && (
            <MyAccountPage user={username} path="/myaccount" />
          )}
          <Comments loggedin={isUserLoggedIn} path="/comments/:comment_id" />
        </Router>
      </div>
    );
  }
  logInUser = (username) => {
    this.setState({ username: username, isUserLoggedIn: true });
  };
  logOutUser = () => {
    this.setState({ username: '', isUserLoggedIn: false });
    navigate('/', {
      state: { directedFromSignUp: true },
    });
  };
}

export default App;
