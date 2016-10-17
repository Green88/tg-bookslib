/**
 * Created by Tania on 14/10/16.
 */
import axios from 'axios';
import {
    LOGIN_USER,
    REQUEST_LOGIN,
    REGISTER_USER,
    REQUEST_REGISTER,
    LOGOUT_USER,
    AUTH_ERROR,
    TOKEN_AUTH
} from './types';

import { ROOT_URL } from '../config';
import { closePopup } from './index';
import { createProfile } from './profile';

export function authWithToken(token) {
    return function(dispatch) {
        axios.get(`${ROOT_URL}/user/get`, { headers: { authorization: token }})
            .then(response => {
                const data = response.data;
                dispatch({
                    type: TOKEN_AUTH,
                    payload: data.payload.user
                });
            })
            .catch(() => {
                dispatch(authError('Bad Login Info'));
            });
    }
}

export function requestLogin() {
    return {
        type: REQUEST_LOGIN
    };
}

export function login(email, password) {
    return function(dispatch) {
        axios.post(`${ROOT_URL}/signin`, { email, password })
            .then(response => {
                const data = response.data;
                dispatch({
                    type: LOGIN_USER,
                    payload: data.payload.user
                });
                dispatch(closePopup());
                localStorage.setItem('token', data.payload.token);
            })
            .catch(() => {
                dispatch(authError('Bad Login Info'));
            });
    }
}

export function requestRegister() {
    return {
        type: REQUEST_REGISTER
    };
}

export function register(email, password, username) {
    return function(dispatch) {
        axios.post(`${ROOT_URL}/signup`, { email, password, username })
            .then(response => {
                const data = response.data;
                dispatch({
                    type: REGISTER_USER,
                    payload: data.payload.user
                });
                dispatch(createProfile(data.payload.user));
                dispatch(closePopup());
                localStorage.setItem('token', data.payload.token);
            })
            .catch(() => {
                dispatch(authError('Bad Register Info'));
            });
    }
}

export function authError(error) {
    return {
        type: AUTH_ERROR,
        payload: error
    };
}

export function logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('profile');
    return {
        type: LOGOUT_USER
    };
}