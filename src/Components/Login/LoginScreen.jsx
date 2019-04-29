import React from 'react';
import { LoginForm } from './LoginForm';
import { getUsersByUsername } from '../../Api';

export class LoginScreen extends React.Component {
  state = {
    userInput: '' || 'DefaultUser',
    error: null,
  };
  render() {
    const { userInput, error } = this.state;
    const { loggedin } = this.props;
    return (
      <LoginForm
        loggedin={loggedin}
        onSubmit={this.handleSubmit}
        onChange={this.handleTyping}
        onClick={this.handleLogout}
        userInput={userInput}
        error={error}
      />
    );
  }
  handleTyping = (event) => {
    const value = event.target.value;
    this.setState({ userInput: value });
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
