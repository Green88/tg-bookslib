import React, { Component } from 'react';
import UserActionsSection from './user-actions-section';

export default class Header extends Component {
  render() {
    return (
      <nav className="header-container">
        <h1>Writers library</h1>
        <UserActionsSection/>
      </nav>
    );
  }
};
