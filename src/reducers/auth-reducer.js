import {
  LOGIN_PENDING,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_PENDING,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_USER,
  REGISTER_USER,
  LOGOUT_USER,
} from '../actions/types';

const initialState = {
  pending: false,
  authenticated: false,
  user: null,
  error: null
};

export default function(state = initialState, action) {
  switch(action.type) {
    case LOGIN_PENDING:
    case REGISTER_PENDING:
        return { ...state, pending: true };
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
        return { ...state, pending: false, authenticated: true, user: action.payload };
    case LOGIN_FAIL:
    case REGISTER_FAIL:
        return { ...state, pending: false, authenticated: false, error: action.payload };
    case LOGOUT_USER:
      return { ...state, error: null, authenticated: false, user: null };
    default:
      return state;
  }
}