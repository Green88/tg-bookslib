// @MODULES
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

// @COMPONENTS
import UserActionsSection from './user-actions-section';

// @ACTIONS

export default class Header extends Component {
  static propTypes = {
    auth: PropTypes.bool
  };

  render() {
    return (
      <nav className="header-container">
        <h1>
            <Link to="/">Writers Library</Link>
        </h1>
        <UserActionsSection
          auth={this.props.auth}
        />
      </nav>
    );
  }
}

