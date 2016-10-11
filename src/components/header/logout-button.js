/**
 * Created by Tania on 25/09/16.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/index';

class LogoutButton extends Component {
    render() {
        return (
            <button
            className="action-button"
            onClick={this.requestLogout.bind(this)}
            >Logout</button>
        );
    }

    requestLogout() {
        if(this.props.authenticated) {
            this.props.logout();
        }
    }
}

function mapStateToProps(state) {
    return {
        authenticated: state.auth.authenticated
    };
}

export default connect(mapStateToProps, { logout } )(LogoutButton);