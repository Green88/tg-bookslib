import axios from 'axios';
import {
    FETCH_BOOKS,
    CLOSE_MODAL
} from './types';

import { ROOT_URL } from '../config';

export function fetchBooks() {
    const request = axios.get(`${ROOT_URL}/books`);

    return {
        type: FETCH_BOOKS,
        payload: request
    };
}

export function closePopup() {
    return {
        type: CLOSE_MODAL
    };
}