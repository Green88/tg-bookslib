import axios from 'axios';
import {
    FETCH_BOOKS,
    LOGIN_USER,
    REQUEST_LOGIN,
    REGISTER_USER,
    REQUEST_REGISTER
} from './types';


const ROOT_URL = 'localhost:3090';

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
    const request = axios.post(`${ROOT_URL}/signin`, { email, password });
    return {
      type: LOGIN_USER,
      payload: request
    };
}

export function requestRegister() {
    return {
        type: REQUEST_REGISTER
    };
}

export function register(email, password) {
    const request = axios.post(`${ROOT_URL}/signup`, { email, password });
    return {
        type: REGISTER_USER,
        payload: request
    };
}