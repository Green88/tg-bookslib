import React, { Component } from 'react';

import Header from './header/header';
import Modal from './modal';

export default class App extends Component {
  render() {
    return (
        <div>
          <Header />
          {this.props.children}
          <Modal />
        </div>
    );
  }
};
