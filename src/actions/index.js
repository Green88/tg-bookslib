import axios from 'axios';
import {
    FETCH_BOOKS,
    LOGIN_USER,
    REQUEST_LOGIN,
    REGISTER_USER,
    REQUEST_REGISTER,
    CLOSE_MODAL,
    LOGOUT_USER
} from './types';


const ROOT_URL = 'http://localhost:3090';

export function fetchBooks() {
    const request = axios.get(`${ROOT_URL}/books`);

    return {
        type: FETCH_BOOKS,
        payload: request
    };
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
                dispatch({ type: LOGIN_USER });
                dispatch({ type: CLOSE_MODAL });
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

export function register(email, password) {
    return function(dispatch) {
        axios.post(`${ROOT_URL}/signup`, { email, password })
            .then(response => {
                const data = response.data;
                dispatch({ type: REGISTER_USER });
                dispatch({ type: CLOSE_MODAL });
                localStorage.setItem('token', data.payload.token);
            })
            .catch(() => {
                dispatch(authError('Bad Register Info'));
            });
    }
}

export function logout() {
    localStorage.removeItem('token');
    return {
        type: LOGOUT_USER
    };
}