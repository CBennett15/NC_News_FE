import React from 'react';
import { LoginForm } from './LoginForm';
import { getUsersByUsername } from '../../Api';
// import { navigate } from '@reach/router';

export class LoginScreen extends React.Component {
  state = {
    userInput: '',
  };
  render() {
    return (
      <LoginForm onSubmit={this.handleSubmit} onChange={this.handleTyping} />
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
      //   navigate('/myaccount', {
      //     state: { directedFromLogin: true },
      //   });
    });
  };
}
