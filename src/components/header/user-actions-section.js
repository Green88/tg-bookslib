import React, { Component, PropTypes } from 'react';
import LoginButton from './login-button';
import RegisterButton from './register-button';
import LogoutButton from './logout-button';
import ProfileButton from './profile-button';
import { connect } from 'react-redux';
import { authWithToken } from '../../actions/auth';

class UserActionsSection extends Component {
  static propTypes = {
    user: PropTypes.string
  };
  constructor(props) {
    super(props);
  }

  // componentWillMount() {
  //     const token = localStorage.getItem('token');
  //     if(token && !this.props.authenticated){
  //         this.props.authWithToken(token);
  //     }
  // }
  //
  // componentWillReceiveProps(nextProp) {
  //   this.updateActions();
  // }


  render() {
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
          <LogoutButton/>
        </div>
      );
    };

    const { user } = this.props;

    return (
      <div>
        {user === 'anon' ? anonState() : authState()}
      </div>
    );
  }
}





function mapStateToProps(state) {
    return {
        authenticated: state.auth.authenticated
    };
}

export default connect(mapStateToProps, { authWithToken })(UserActionsSection);
