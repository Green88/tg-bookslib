import React, { Component, PropTypes } from 'react';
import UserActionsSection from './user-actions-section';
import { Link } from 'react-router';

export default class Header extends Component {
  static propTypes = {
    user: PropTypes.string
  };
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <nav className="header-container">
        <h1>
            <Link to="/">Writers Library</Link>
        </h1>
        <UserActionsSection
          user={this.props.user}
        />
      </nav>
    );
  }
};
