// @MODULES
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

// @COMPONENTS
import UserActionsSection from './user-actions-section';

// @ACTIONS
import { authWithToken } from '../../actions/auth';

class Header extends Component {
  static propTypes = {
    user: PropTypes.string
  };
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    const token = localStorage.getItem('token');
    if(token && !this.props.authenticated){
        this.props.authWithToken(token);
    }
  }
  componentWillReceiveProps() {

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

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  };
}

export default connect(mapStateToProps, { authWithToken })(Header);
