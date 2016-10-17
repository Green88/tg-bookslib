/**
 * Created by Tania on 26/09/16.
 */
import { ROOT_URL } from '../../config';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { closePopup } from '../../actions/index';
import { register } from '../../actions/auth';


import axios from 'axios';


class Register extends Component {

    handleFormSubmit(formData) {
        this.props.register(formData.email, formData.password, formData.username);
    }

    render() {
        const { handleSubmit, pristine, submitting } = this.props;

        return (
            <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                <fieldset className="form-group">
                    <Field name="email" label="Email" type="email" className="form-control" component={this.renderField.bind(this)} />
                </fieldset>
                <fieldset className="form-group">
                    <Field name="username" label="Username" component={this.renderField.bind(this)} type="text" className="form-control" />
                </fieldset>
                <fieldset className="form-group">
                    <Field name="password" label="Password" component={this.renderField.bind(this)} type="password" className="form-control" />
                </fieldset>
                <fieldset className="form-group">
                    <Field name="confirmPassword" label="Confirm Password" component={this.renderField.bind(this)} type="password" className="form-control" />
                </fieldset>
                {this.props.errorMessage && <div className="alert alert-danger">
                    <strong>Oops!</strong> {this.props.errorMessage}
                </div>}
                <button action="submit" disabled={submitting || pristine} className="btn btn-primary">Register</button>
                <button action="button" onClick={this.closeForm.bind(this)} className="btn btn-primary second">Close</button>
            </form>
        );
    }

    closeForm(e) {
        e.preventDefault();
        e.stopPropagation();
        this.props.closePopup();
    }

    renderField({ input, label, type, meta: { asyncValidating, touched, error } }) {
        return (
            <div>
                <label>{label}</label>
                <div className={asyncValidating ? 'async-validating' : ''}>
                    <input {...input} type={type} placeholder={label}/>
                    {touched && error && <span>{error}</span>}
                </div>
            </div>
        );
    }

}

const validate = values => {
    const errors = {};

    if (!values.email) {
        errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }

    if(!values.username) {
        errors.username = 'Required';
    }
    if(!values.password) {
        errors.password = 'Required';
    }

    if(!values.confirmPassword) {
        errors.password = 'Required';
    } else if(values.password !== values.confirmPassword) {
        errors.password = 'Passwords should match';
    }
    return errors;
};

const asyncValidate = (values, dispatch) => {
    const request = axios.get(`${ROOT_URL}/validate/${values.username}`);

    return request
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            var data = error.response.data;
            if(data.errorId === 409) {
                throw {username: 'That username is taken'};
            }
        });
};

Register = reduxForm({
    form: 'register',
    validate,
    asyncValidate,
    asyncBlurFields: [ 'username' ]
})(Register);

function mapStateToProps(state) {
    return { errorMessage: state.auth.error };
}
export default connect(mapStateToProps, { register, closePopup })(Register);