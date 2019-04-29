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
    const { error } = this.state;
    return (
      <RegisterForm
        error={error}
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
    const { username, name, avatar_url } = this.state;
    const { logInUser } = this.props;
    event.preventDefault();
    addNewUser({
      username: username,
      name: name,
      avatar_url: avatar_url,
    })
      .then((user) => {
        logInUser(user.username);
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
