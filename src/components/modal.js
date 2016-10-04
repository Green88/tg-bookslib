/**
 * Created by Tania on 25/09/16.
 */
import React, { Component } from 'react';
import LoginForm from './auth-forms/login';
import RegisterForm from './auth-forms/register';
import { connect } from 'react-redux';

class Modal extends Component {
    render() {
        switch(this.props.modal) {
            case 'login':
                return (
                    <LoginForm/>
                );
            case 'register':
                return (
                    <RegisterForm/>
                );
            default:
                return (
                    <div>Modal is empty</div>
                );
        }
    }
}

function mapStateToProps(state) {
    return {
        modal: state.modal.openModal
    };
}

export default connect(mapStateToProps)(Modal);