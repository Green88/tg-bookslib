/**
 * Created by Tania on 25/09/16.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestLogin } from '../../actions/index';

class LoginButton extends Component {
    render() {
        return (
            <button
            className="action-button"
            onClick={this.requestLogin.bind(this)}
            >Login</button>
        );
    }

    requestLogin() {
        console.log('request login');
        this.props.requestLogin();
        //disable login button
    }
}

function mapStateToProps(state) {
    return {
    };
}

export default connect(mapStateToProps, { requestLogin })(LoginButton);