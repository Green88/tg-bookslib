/**
 * Created by Tania on 26/09/16.
 */
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

class Login extends Component {
    render() {
        return (

        );
    }
}

export default reduxForm({
    form: 'login',
    fields: ['email', 'password']
})(Login)