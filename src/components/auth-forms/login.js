import React, { Component, PropTypes } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal';
import { login } from '../../actions/auth';

const renderField = ({ input, label, type, meta: { touched, error } }) => {
  return (
    <div>
      <label>{label}</label>
      <div>
        <input {...input} placeholder={label} type={type}/>
        {touched && error && <span>{error}</span>}
      </div>
    </div>
  );
};

class Login extends Component {
  static propTypes = {
    login: PropTypes.func,
    closeModal: PropTypes.func,
    loginError: PropTypes.object
  };
  constructor(props) {
    super(props);
    this.state = {
      loginError: null
    };
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.loginError && nextProps.loginError !== this.props.loginError) {
      this.setState({
        loginError: 'Login failed'
      });
    } else if(!nextProps.loginError) {
      this.setState({
        loginError: null
      });
    }
  }
  handleFormSubmit(formData) {
    this.props.login(formData.email, formData.password);
  }

  closeForm(e) {
    e.preventDefault();
    e.stopPropagation();
    this.props.closeModal();
  }

  render() {
    const { handleSubmit, submitting } = this.props;

    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
          <fieldset className="form-group">
              <Field
                name="email"
                label="Email"
                component={renderField}
                type="email"
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
        {this.state.loginError && <div className="alert alert-danger">
            <strong>Oops!</strong> {this.state.loginError}
        </div>}
          <button action="submit" disabled={submitting}  className="btn btn-primary">Login</button>
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
    loginError: state.auth.error
  };
}
export default connect(mapStateToProps, { login, closeModal })(Login);

