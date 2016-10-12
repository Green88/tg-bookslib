import axios from 'axios';
import {
    FETCH_BOOKS,
    LOGIN_USER,
    REQUEST_LOGIN,
    REGISTER_USER,
    REQUEST_REGISTER,
    CLOSE_MODAL,
    LOGOUT_USER,
    AUTH_ERROR
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

export function register(email, password) {
    return function(dispatch) {
        axios.post(`${ROOT_URL}/signup`, { email, password })
            .then(response => {
                const data = response.data;
                dispatch({ type: REGISTER_USER });
                dispatch(createProfile(data.payload.id));
                dispatch(closePopup());
                localStorage.setItem('token', data.payload.token);
            })
            .catch(() => {
                dispatch(authError('Bad Register Info'));
            });
    }
}

export function createProfile(id) {
    return function(dispatch) {
        axios.post(`${ROOT_URL}/profile/create`, { id })
            .then(response => {
                const data = response.data;
                localStorage.setItem('user', JSON.stringify(data.payload));
            })
            .catch((error) => {
                console.log(error);
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
    localStorage.removeItem('user');
    return {
        type: LOGOUT_USER
    };
}

export function closePopup() {
    return {
        type: CLOSE_MODAL
    };
}