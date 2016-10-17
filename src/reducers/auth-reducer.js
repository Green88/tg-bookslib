import {
    LOGIN_USER,
    REGISTER_USER,
    LOGOUT_USER,
    AUTH_ERROR,
    TOKEN_AUTH
} from '../actions/types';

export default function(state = {}, action) {
    switch(action.type) {
        case LOGIN_USER:
            return { ...state,  error: '', authenticated: true, user: action.payload};
        case REGISTER_USER:
            return { ...state, error: '', authenticated: true, user: action.payload};
        case LOGOUT_USER:
            return { ...state, error: '', authenticated: false, user: null};
        case AUTH_ERROR:
            return { ...state, error: action.payload};
        case TOKEN_AUTH:
            return {...state, error:'', authenticated: true, user: action.payload};
        default:
            return state;
    }
}