import React from 'react';
import { LoginForm } from './LoginForm';
import { getUsersByUsername } from '../../Api';

export class LoginScreen extends React.Component {
  state = {
    userInput: '' || 'DefaultUser',
    error: null,
  };
  render() {
    return (
      <LoginForm
        loggedin={this.props.loggedin}
        onSubmit={this.handleSubmit}
        onChange={this.handleTyping}
        onClick={this.handleLogout}
        userInput={this.state.userInput}
        error={this.state.error}
      />
    );
  }
  handleTyping = (event) => {
    const value = event.target.value;
    this.setState({ userInput: value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    getUsersByUsername(this.state.userInput)
      .then((user) => {
        this.props.logInUser(user.username);
      })
      .catch((err) => {
        this.setState({ error: err });
      });
  };
  handleLogout = (event) => {
    this.props.logOutUser();
  };
}
