// @MODULES
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

// @ACTIONS
import { openModal } from '../../actions/modal';

class RegisterButton extends Component {
  static propTypes = {
    openModal: PropTypes.func
  };
  openRegisterModal() {
    this.props.openModal('register');
  }
  render() {
    return (
      <button
        className="action-button"
        onClick={this.openRegisterModal.bind(this)}
      >
          Register
      </button>
    );
  }
}

function mapStateToProps(state) {
    return {

    };
}

export default connect(mapStateToProps, { openModal })(RegisterButton);