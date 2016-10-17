/**
 * Created by Tania on 26/09/16.
 */
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { closePopup } from '../../actions/index';
import { login } from '../../actions/auth';

class Login extends Component {

    handleFormSubmit(formData) {
        this.props.login(formData.email, formData.password);
    }

    render() {
        const { handleSubmit, submitting } = this.props;

        return (
            <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                <fieldset className="form-group">
                    <Field name="email" label="Email" component={this.renderField.bind(this)} type="email" className="form-control" />
                </fieldset>
                <fieldset className="form-group">
                    <Field name="password" label="Password" component={this.renderField.bind(this)} type="password" className="form-control" />
                </fieldset>
                {this.props.errorMessage && <div className="alert alert-danger">
                    <strong>Oops!</strong> {this.props.errorMessage}
                </div>}
                <button action="submit" disabled={submitting}  className="btn btn-primary">Login</button>
                <button action="button" onClick={this.closeForm.bind(this)} className="btn btn-primary second">Close</button>
            </form>
        );
    }

    closeForm(e) {
        e.preventDefault();
        e.stopPropagation();
        this.props.closePopup();
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
    return errors;
};

Login = reduxForm({
    form: 'login',
    validate
})(Login);

function mapStateToProps(state) {
    return {
        errorMessage: state.auth.error
    };
}
export default connect(mapStateToProps, { login, closePopup })(Login);

