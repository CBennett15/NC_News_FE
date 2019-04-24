import React from 'react';
import { LoginForm } from './LoginForm';
import { getUsersByUsername } from '../../Api';

export class LoginScreen extends React.Component {
  state = {
    userInput: '',
  };
  render() {
    return (
      <LoginForm
        loggedin={this.props.loggedin}
        onSubmit={this.handleSubmit}
        onChange={this.handleTyping}
        onClick={this.handleLogout}
      />
    );
  }
  handleTyping = (event) => {
    const value = event.target.value;
    this.setState({ userInput: value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    getUsersByUsername(this.state.userInput).then((user) => {
      this.props.logInUser(user.username);
    });
  };
  handleLogout = (event) => {
    this.props.logOutUser();
  };
}
