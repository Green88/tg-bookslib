import {
    OPEN_MODAL,
    CLOSE_MODAL
} from '../actions/types';

const initialState = {
    isOpen: false,
    modalType: 'none'
};

export default function(state = initialState, action) {
    switch(action.type) {
        case OPEN_MODAL:
            return { ...state, isOpen: true, modalType: action.payload};
        case CLOSE_MODAL:
            return {...state, isOpen: false, modalType: action.payload};
        default:
            return state;
    }
}