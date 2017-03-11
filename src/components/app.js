import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Header from './header/header';
import Modal from './modal';
import { authWithToken } from '../actions/auth';

class App extends Component {
  static propTypes = {
    authWithToken: PropTypes.func,
    modal: PropTypes.object,
    authenticated: PropTypes.bool
  };
  componentWillMount() {
    const token = localStorage.getItem('token');
    if(token && !this.props.authenticated){
      this.props.authWithToken(token);
    }
  }
  componentWillReceiveProps(nextProps) {

  }
  render() {
    const { modal, authenticated } = this.props;
    return (
        <div>
          <Header
            auth={ authenticated || false }
          />
          {this.props.children}
          <Modal
            isOpen={modal.isOpen || false}
            type={modal.modalType || 'login'}
          />
        </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    modal: state.modal,
    authenticated: state.auth.authenticated
  };
}

export default connect(mapStateToProps, { authWithToken })(App);
