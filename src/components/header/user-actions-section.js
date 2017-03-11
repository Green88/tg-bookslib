import React, { Component, PropTypes } from 'react';
import LoginButton from './login-button';
import RegisterButton from './register-button';
import LogoutButton from './logout-button';
import ProfileButton from './profile-button';
import { connect } from 'react-redux';
import { authWithToken } from '../../actions/auth';

export default class UserActionsSection extends Component {
  static propTypes = {
    auth: PropTypes.bool
  };

  render() {
    const { auth } = this.props;

    const anonState = function() {
      return (
        <div>
          <LoginButton/>
          <RegisterButton/>
        </div>
      );
    };
    const authState = function() {
      return (
        <div>
          <ProfileButton/>
          <LogoutButton
            auth={auth}
          />
        </div>
      );
    };

    return (
      <div>
        {auth ? authState() : anonState()}
      </div>
    );
  }
}
