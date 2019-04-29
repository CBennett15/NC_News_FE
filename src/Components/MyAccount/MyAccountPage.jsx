import React from 'react';
import { getUsersByUsername } from '../../Api';
import { navigate } from '@reach/router';
import { ReusableButton } from '../Buttons/ReusableButton';

export class MyAccountPage extends React.Component {
  state = {
    userInfo: '',
  };
  componentDidMount() {
    const { user } = this.props;
    getUsersByUsername(user).then((user) => {
      this.setState({ userInfo: user });
    });
  }
  render() {
    const { user } = this.props;
    const { userInfo } = this.state;
    return (
      <div>
        <h2>Welcome Back {user}</h2>
        <ul>
          <li>{userInfo.name}</li>
          <img src={userInfo.avatar_url} alt="user-avatar" />
        </ul>
        <ReusableButton
          onClick={() => navigate(`/users/${user}`)}
          text={'My Articles'}
        />
        <ReusableButton
          onClick={() => navigate(`/users/${user}/comments`)}
          text={'My Comments'}
        />
      </div>
    );
  }
}
