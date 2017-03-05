/**
 * Created by Tania on 14/10/16.
 */
import axios from 'axios';
import {
  LOGIN_PENDING,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_PENDING,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGOUT_USER,
} from './types';

import { ROOT_URL } from '../config';
import { closePopup } from './modal';
import { createProfile } from './profile';

export function authWithToken(token) {
  return function(dispatch) {
    dispatch({type: LOGIN_PENDING});
    axios.get(`${ROOT_URL}/user/get`, { headers: { authorization: token }})
      .then(response => {
        const data = response.data;
        dispatch({
          type: LOGIN_SUCCESS,
          payload: data.payload.user
        });
      })
      .catch((error) => {
        dispatch({type: LOGIN_FAIL, payload: error});
      });
  }
}

export function login(email, password) {
  return function(dispatch) {
    dispatch({type: LOGIN_PENDING});
    axios.post(`${ROOT_URL}/signin`, { email, password })
      .then(response => {
        const data = response.data;
        dispatch({
          type: LOGIN_SUCCESS,
          payload: data.payload.user
        });
        dispatch(closePopup());
        localStorage.setItem('token', data.payload.token);
      })
      .catch((error) => {
        dispatch({type: LOGIN_FAIL, payload: error});
      });
  }
}

export function register(email, password, username) {
  return function(dispatch) {
    dispatch({type: REGISTER_PENDING});
    axios.post(`${ROOT_URL}/signup`, { email, password, username })
      .then(response => {
        const data = response.data;
        dispatch({
          type: REGISTER_SUCCESS,
          payload: data.payload.user
        });
        dispatch(createProfile(data.payload.user));
        dispatch(closePopup());
        localStorage.setItem('token', data.payload.token);
      })
      .catch(() => {
        dispatch({type: REGISTER_FAIL, payload: error});
      });
  }
}

export function logout() {
  localStorage.removeItem('token');
  localStorage.removeItem('profile');
  return {
    type: LOGOUT_USER
  };
}