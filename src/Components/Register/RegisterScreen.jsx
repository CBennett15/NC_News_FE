import React from 'react';
import { RegisterForm } from './RegisterForm';
import { addNewUser } from '../../Api';
import { navigate } from '@reach/router';

export class RegisterScreen extends React.Component {
  state = {
    username: '',
    name: '',
    avatar_url: '',
    error: null,
  };
  render() {
    return (
      <RegisterForm
        error={this.state.error}
        onSubmit={this.handleSubmit}
        onChange={this.handleTyping}
      />
    );
  }
  handleTyping = (event) => {
    const value = event.target.value;
    this.setState({ [event.target.name]: value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    addNewUser({
      username: this.state.username,
      name: this.state.name,
      avatar_url: this.state.avatar_url,
    })
      .then((user) => {
        this.props.logInUser(user.username);
        navigate('/', {
          state: { directedFromSignUp: true },
        });
        this.setState({ error: null });
      })
      .catch((err) => {
        this.setState({ error: err });
      });
  };
}
