/**
 * Created by Tania on 14/10/16.
 */
import axios from 'axios';
import { ROOT_URL } from '../config';
import { FETCH_PROFILE } from './types';

export function createProfile(user) {
    return function(dispatch) {
        axios.post(`${ROOT_URL}/profile/create`, {id: user.id, username: user.username})
            .then(response => {
                const data = response.data;
                localStorage.setItem('profile', JSON.stringify(data.payload));
            })
            .catch((error) => {
                console.log(error);
            });
    }
}

export function fetchProfileById(id) {
    return function(dispatch) {
        axios.get(`${ROOT_URL}/profile/${id}`)
            .then(response => {
                const data = response.data;
                dispatch({
                    type: FETCH_PROFILE,
                    payload: data.payload
                });
                localStorage.setItem('profile', JSON.stringify(data.payload));
            })
            .catch((error) => {
                console.log(error);
            });
    }
}
