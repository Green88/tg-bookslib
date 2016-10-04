/**
 * Created by Tania on 26/09/16.
 */
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

class Register extends Component {
    render() {
        return (
            <div>Register Form</div>
        );
    }
}

export default reduxForm({
    form: 'register',
    fields: ['email', 'password']
})(Register)