import React, { Component } from 'react';
import LoginButton from './login-button';
import RegisterButton from './register-button';
import LogoutButton from './logout-button';
import ProfileButton from './profile-button';
import { connect } from 'react-redux';

class UserActionsSection extends Component {
  render() {
      //this.updateActions();
      if(this.props.authenticated) {
          return (
              <div>
                  <ProfileButton/>
                  <LogoutButton/>
              </div>
          );
      } else {
          return (
              <div>
                  <LoginButton/>
                  <RegisterButton/>
              </div>
          );
      }
  }

  componentWillReceiveProps(nextProp) {
    this.updateActions();
  }

  updateActions() {
      if(this.props.authenticated) {
          return (
              <div>
                  <ProfileButton/>
                  <LogoutButton/>
              </div>
          );
      } else {
          return (
              <div>
                  <LoginButton/>
                  <RegisterButton/>
              </div>
          );
      }
  }
}

function mapStateToProps(state) {
    return {
        authenticated: state.auth.authenticated
    };
}

export default connect(mapStateToProps)(UserActionsSection);
