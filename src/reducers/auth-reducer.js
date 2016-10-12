import {
    LOGIN_USER,
    REGISTER_USER,
    LOGOUT_USER,
    AUTH_ERROR
} from '../actions/types';

export default function(state = {}, action) {
    switch(action.type) {
        case LOGIN_USER:
            return { ...state,  error: '', authenticated: true};
        case REGISTER_USER:
            return { ...state, error: '', authenticated: true};
        case LOGOUT_USER:
            return { ...state, error: '', authenticated: false};
        case AUTH_ERROR:
            return { ...state, error: action.payload};
        default:
            return state;
    }
}