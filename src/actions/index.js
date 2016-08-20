import axios from 'axios';

export const FETCH_BOOKS = 'FETCH_BOOKS';

const ROOT_URL = 'localhost:3090';

export function fetchBooks() {
    const request = axios.get(`${ROOT_URL}/books`);

    return {
        type: FETCH_BOOKS,
        payload: request
    };
}