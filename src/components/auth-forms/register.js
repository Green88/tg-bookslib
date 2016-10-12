/**
 * Created by Tania on 26/09/16.
 */
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { register } from '../../actions/index';

class Register extends Component {

    handleFormSubmit(formData) {
        this.props.register(formData.email, formData.password);
    }

    render() {
        const { handleSubmit, submitting } = this.props;

        return (
            <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                <fieldset className="form-group">
                    <Field name="email" label="Email" type="email" className="form-control" component={this.renderField.bind(this)} />
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
                <button action="submit" disabled={submitting} className="btn btn-primary">Register</button>
            </form>
        );
    }

    renderField({ input, label, type, meta: { touched, error } }) {
        return (
            <div>
                <label>{label}</label>
                <div>
                    <input {...input} placeholder={label} type={type}/>
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
    if(!values.password) {
        errors.password = 'Required';
    }

    if(values.password !== values.confirmPassword) {
        errors.password = 'Passwords should match';
    }
    return errors;
};

Register = reduxForm({
    form: 'register',
    validate
})(Register);

function mapStateToProps(state) {
    return { errorMessage: state.auth.error };
}
export default connect(mapStateToProps, { register })(Register);