/**
 * Created by Tania on 25/09/16.
 */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { openModal } from '../../actions/modal';

class LoginButton extends Component {
  static propTypes = {
    openModal: PropTypes.func
  };
  render() {
    return (
      <button
        className="action-button"
        onClick={this.openLoginModal.bind(this)}
      >
          Login
      </button>
    );
  }

  openLoginModal() {
    this.props.openModal('login');
    // todo: disable login button
  }
}

function mapStateToProps(state) {
  return {
  };
}

export default connect(mapStateToProps, { openModal })(LoginButton);