/**
 * Created by Tania on 25/09/16.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';

class ProfileButton extends Component {
    render() {
        return (
            <button>View profile</button>
        );
    }
}

function mapStateToProps(state) {
    return {
        authenticated: state.auth.authenticated
    };
}

export default connect(mapStateToProps)(ProfileButton);