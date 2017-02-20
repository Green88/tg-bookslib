/**
 * Created by Tania on 25/09/16.
 */
import React, { Component, PropTypes } from 'react';
import LoginForm from './auth-forms/login';
import RegisterForm from './auth-forms/register';
import { connect } from 'react-redux';

class Modal extends Component {
    static propTypes = {
      isOpen: PropTypes.bool,
      type: PropTypes.string
    };
    // componentWillReceiveProps(nextProps) {
    //     if(nextProps.modal !== this.props.modal) {
    //         this.updateModal();
    //     }
    // }
    //
    // updateModal() {
    //     switch(this.props.modal) {
    //         case 'login':
    //             return (
    //                 <LoginForm/>
    //             );
    //         case 'register':
    //             return (
    //                 <RegisterForm/>
    //             );
    //         default:
    //             return (
    //                 <div className="hidden"></div>
    //             );
    //     }
    // }
    render() {
      const { isOpen, type } = this.props;

      return (
        <div className={isOpen ? '' : 'hidden'}>
          {type === 'login' ? <LoginForm/> : <RegisterForm/>}
        </div>
      );
    }
}

function mapStateToProps(state) {
    return {
        modal: state.modal.openModal
    };
}

export default connect(mapStateToProps)(Modal);