import React from 'react';
import { LoginForm } from './LoginForm';
import { getUsersByUsername } from '../../Api';

export class LoginScreen extends React.Component {
  state = {
    userInput: '',
    error: null,
  };
  render() {
    const { error } = this.state;
    const { loggedin } = this.props;
    return (
      <LoginForm
        loggedin={loggedin}
        onSubmit={this.handleSubmit}
        onChange={this.handleTyping}
        onClick={this.handleLogout}
        error={error}
        handleGuest={this.handleGuest}
      />
    );
  }
  handleTyping = (event) => {
    const value = event.target.value;
    this.setState({ userInput: value });
  };
  handleGuest = (event) => {
    const guest = event.target.value;
    getUsersByUsername(guest).then((user) => {
      this.props.logInUser(user.username);
    });
  };
  handleSubmit = (event) => {
    const { userInput } = this.state;
    event.preventDefault();
    getUsersByUsername(userInput)
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
