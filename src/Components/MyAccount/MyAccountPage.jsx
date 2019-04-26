import React from 'react';
import { getUsersByUsername } from '../../Api';
import { MyArticles } from './MyArticles';
import { MyComments } from './MyComments';
import { navigate } from '@reach/router';

export class MyAccountPage extends React.Component {
  state = {
    userInfo: '',
  };
  componentDidMount() {
    getUsersByUsername(this.props.user).then((user) => {
      this.setState({ userInfo: user });
    });
  }
  render() {
    return (
      <div>
        <h2>Welcome Back {this.props.user}</h2>
        <ul>
          <li>{this.state.userInfo.name}</li>
          <img src={this.state.userInfo.avatar_url} alt="user-avatar" />
        </ul>
        <MyArticles onClick={() => navigate(`/users/${this.props.user}`)} />
        <MyComments
          onClick={() => navigate(`/users/${this.props.user}/comments`)}
        />
      </div>
    );
  }
}
