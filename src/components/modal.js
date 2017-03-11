import React, { Component, PropTypes } from 'react';
import LoginForm from './auth-forms/login';
import RegisterForm from './auth-forms/register';
import { connect } from 'react-redux';

class Modal extends Component {
  static propTypes = {
    isOpen: PropTypes.bool,
    type: PropTypes.string
  };

  handleRegister() {

  }

  handleLogin() {

  }

  render() {
    const { isOpen, type } = this.props;
    const loginForm =
      <LoginForm
        onSubmit={this.handleLogin.bind(this)}
      />;

      const registerForm =
        <RegisterForm
          onSubmit={this.handleRegister.bind(this)}
        />;

    return (
      <div className={isOpen ? '' : 'hidden'}>
        {type === 'login' ? <LoginForm/> : <RegisterForm/>}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    modal: state.modal.openModal
  };
}

export default connect(mapStateToProps)(Modal);