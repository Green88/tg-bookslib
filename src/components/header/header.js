import React, { Component } from 'react';
import UserActionsSection from './user-actions-section';
import { Link } from 'react-router';

export default class Header extends Component {
  render() {
    return (
      <nav className="header-container">
        <h1>
            <Link to="/">Writers Library</Link>
        </h1>
        <UserActionsSection/>
      </nav>
    );
  }
};
