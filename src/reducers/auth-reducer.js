import {
    LOGIN_USER,
    REGISTER_USER,
    LOGOUT_USER,
    REQUEST_LOGIN,
    REQUEST_REGISTER
} from '../actions/types';

export default function(state = {}, action) {
    switch(action.type) {
        case LOGIN_USER:
            return { ...state,  authenticated: true};
        case REGISTER_USER:
            return { ...state, authenticated: true};
        case LOGOUT_USER:
            return { ...state, authenticated: false};
        case REQUEST_LOGIN:
            return { ...state, request: 'login'};
        case REQUEST_REGISTER:
            return { ...state, request: 'register'};
        default:
            return state;
    }
}