import React, { Component, PropTypes } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import axios from 'axios';

import { closeModal } from '../../actions/modal';
import { register } from '../../actions/auth';
import { ROOT_URL } from '../../config';

const renderField = ({ input, label, type, meta: { asyncValidating, touched, error } }) => {
  return (
    <div>
      <label>{label}</label>
      <div className={asyncValidating ? 'async-validating' : ''}>
        <input {...input} type={type} placeholder={label}/>
        {touched && error && <span>{error}</span>}
      </div>
    </div>
  );
};


class Register extends Component {

  static propTypes = {
    closeModal: PropTypes.func,
    register: PropTypes.func,
    registrationError: PropTypes.object
  };

  constructor(props) {
    super(props);
    this.state = {
      registrationError: null
    };
  }

  componentWillReceiveProps(nextProps){
    if (nextProps.registrationError && nextProps.registrationError !== this.props.registrationError) {
      if(nextProps.registrationError.errorId === 409) {
        this.setState({
          registrationError: 'User with this email already exists'
        });
      } else {
        this.setState({
          registrationError: 'Registration failed'
        });
      }
    } else {
      this.setState({
        registrationError: null
      });
    }
  }

  handleFormSubmit(formData) {
    this.props.register(formData.email, formData.password, formData.username);
  }

  closeForm(e) {
    e.preventDefault();
    e.stopPropagation();
    this.props.closeModal();
  }

  render() {
    const { handleSubmit, pristine, submitting } = this.props;

    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <fieldset className="form-group">
          <Field
            name="email"
            label="Email"
            type="email"
            className="form-control"
            component={renderField}
          />
        </fieldset>
        <fieldset className="form-group">
          <Field
            name="username"
            label="Username"
            component={renderField}
            type="text"
            className="form-control"
          />
        </fieldset>
        <fieldset className="form-group">
          <Field
            name="password"
            label="Password"
            component={renderField}
            type="password"
            className="form-control"
          />
        </fieldset>
        <fieldset className="form-group">
          <Field
            name="confirmPassword"
            label="Confirm Password"
            component={renderField}
            type="password"
            className="form-control"
          />
        </fieldset>
        {this.state.registrationError && <div className="alert alert-danger">
          <strong>Oops!</strong> {this.state.registrationError}
        </div>}
        <button action="submit" disabled={submitting || pristine} className="btn btn-primary">Register</button>
        <button action="button" onClick={this.closeForm.bind(this)} className="btn btn-primary second">Close</button>
      </form>
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
  }
  if(values.password && values.confirmPassword && values.password !== values.confirmPassword) {
    errors.password = 'Passwords should match';
  }
  return errors;
};

const asyncValidate = (values, dispatch) => {
  const request = axios.get(`${ROOT_URL}/validate/${values.username}`);

  return request
    .then(response => {
      console.log('Username available');
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
  // console.log('state', state);
  return { registrationError: state.auth.error };
}
export default connect(mapStateToProps, { register, closeModal })(Register);