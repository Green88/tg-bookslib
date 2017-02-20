import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from './header/header';
import Modal from './modal';

class App extends Component {
  render() {
    const { modal } = this.props;
    return (
        <div>
          <Header
            user="anon"
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
    modal: state.modal
  };
}

export default connect(mapStateToProps)(App);
