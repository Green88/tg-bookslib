/**
 * Created by Tania on 25/09/16.
 */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';

class LogoutButton extends Component {
  static propTypes = {
    logout: PropTypes.func
  };
  requestLogout() {
    if(this.props.authenticated) {
      this.props.logout();
    }
  }
  render() {
    return (
      <button
        className="action-button"
        onClick={this.requestLogout.bind(this)}
      >Logout</button>
    );
  }
}

function mapStateToProps(state) {
    return {
    };
}

export default connect(mapStateToProps, { logout } )(LogoutButton);