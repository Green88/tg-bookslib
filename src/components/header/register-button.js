/**
 * Created by Tania on 25/09/16.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestRegister} from '../../actions/index';

class RegisterButton extends Component {
    render() {
        return (
            <button
            className="action-button"
            onClick={this.requestRegister.bind(this)}
            >Register</button>
        );
    }

    requestRegister() {
        this.props.requestRegister();
    }
}

function mapStateToProps(state) {
    return {
    };
}

export default connect(mapStateToProps, { requestRegister })(RegisterButton);