/**
 * Created by Tania on 25/09/16.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class ProfileButton extends Component {
    render() {
        var linkToProfile = `/profile/${this.props.user.id}`;
        return (
            <button>
                <Link to={linkToProfile}>{this.props.user.username}'s profile</Link>
            </button>
        );
    }
}

function mapStateToProps(state) {
    return {
        authenticated: state.auth.authenticated,
        user: state.auth.user
    };
}

export default connect(mapStateToProps)(ProfileButton);