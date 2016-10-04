/**
 * Created by Tania on 26/09/16.
 */
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { login } from '../../actions/index';

class Login extends Component {

    handleFormSubmit(formData) {
        this.props.login(formData.email, formData.password);
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                <fieldset className="form-group">
                    <label>Email:</label>
                    <Field name="email" component="input" type="email" className="form-control" />
                </fieldset>
                <fieldset className="form-group">
                    <label>Password:</label>
                    <Field name="password" component="input" type="password" className="form-control" />
                </fieldset>

                <button action="submit" className="btn btn-primary">Login</button>
            </form>
        );
    }
}

Login = reduxForm({
    form: 'login'
})(Login);

function mapStateToProps(state) {
    return {  };
}
export default connect(mapStateToProps, { login })(Login);

