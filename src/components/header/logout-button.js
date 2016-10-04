/**
 * Created by Tania on 25/09/16.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';

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

    }
}

function mapStateToProps(state) {
    return {
        authenticated: state.auth.authenticated
    };
}

export default connect(mapStateToProps)(LogoutButton);