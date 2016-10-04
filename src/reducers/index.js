import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './auth-reducer';
import modalReducer from './modal-reducer';

const rootReducer = combineReducers({
    form: formReducer,
    auth: authReducer,
    modal: modalReducer
});

export default rootReducer;
