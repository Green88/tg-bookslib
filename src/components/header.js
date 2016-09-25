import React, { Component } from 'react';
import LoginButton from './login-button';

export default class Header extends Component {
  render() {
    return (
      <nav className="header-container">
        <h1>Writers library</h1>
        <LoginButton/>
      </nav>
    );
  }
};
