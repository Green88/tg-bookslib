import {
    REQUEST_LOGIN,
    REQUEST_REGISTER,
    CLOSE_MODAL
} from '../actions/types';

export default function(state = {openModal: 'none'}, action) {
    switch(action.type) {
        case REQUEST_LOGIN:
            return { ...state, openModal: 'login'};
        case REQUEST_REGISTER:
            return { ...state, openModal: 'register'};
        case CLOSE_MODAL:
            return {...state, openModal: 'none'};
        default:
            return state;
    }
}