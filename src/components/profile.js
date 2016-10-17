/**
 * Created by Tania on 14/10/16.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProfileById } from '../actions/profile';

class Profile extends Component {
    componentWillMount() {
        this.props.fetchProfileById(this.props.params.id);
    }

    render() {
        return (
            <div>Profile...</div>
        );
    }
}

function mapStateToProps(state) {
    console.log(state);
    return {
        user: state.auth.user,
        profile: state.profile.profile
    };
}

export default connect(mapStateToProps, {fetchProfileById})(Profile);
