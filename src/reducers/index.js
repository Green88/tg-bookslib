import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import authReducer from './auth-reducer';
import modalReducer from './modal-reducer';

const rootReducer = combineReducers({
    form,
    auth: authReducer,
    modal: modalReducer
});

export default rootReducer;
