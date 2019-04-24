import React from 'react';
import { getUsersByUsername } from '../../Api';
import { MyArticles } from './MyArticles';
import { MyComments } from './MyComments';

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
        <MyArticles user={this.props.user} />
        <MyComments user={this.props.user} />
      </div>
    );
  }
}
