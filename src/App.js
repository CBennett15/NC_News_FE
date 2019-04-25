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
import { NotFound } from './Components/Errors/NotFound';

class App extends Component {
  state = {
    username: '',
    isUserLoggedIn: false,
  };

  componentDidMount() {
    const recentUser = localStorage.getItem('recentLoggedInUser');
    if (recentUser)
      this.setState({ username: recentUser, isUserLoggedIn: true });
  }
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
          <ArticlePage
            user={username}
            loggedin={isUserLoggedIn}
            path="/articles/:articleid"
          />
          <Topics path="/topics/" />
          <TopicPage path="/topics/:slug" />
          <UserArticles loggedin={isUserLoggedIn} path="/users/:username" />
          <RegisterScreen logInUser={this.logInUser} path="/register" />
          {isUserLoggedIn && (
            <MyAccountPage user={username} path="/myaccount" />
          )}
          <Comments loggedin={isUserLoggedIn} path="/comments/:comment_id" />
          <NotFound default />
        </Router>
      </div>
    );
  }
  logInUser = (username) => {
    this.setState({ username: username, isUserLoggedIn: true });
    localStorage.setItem('recentLoggedInUser', username);
  };
  logOutUser = () => {
    this.setState({ username: '', isUserLoggedIn: false });
    localStorage.removeItem('recentLoggedInUser');
    navigate('/', {
      state: { directedFromSignUp: true },
    });
  };
}

export default App;
