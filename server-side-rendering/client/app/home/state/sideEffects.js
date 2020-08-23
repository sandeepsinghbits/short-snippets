import axios from 'axios';
import { receivedAvengers } from './actions.js';
export function fetchAvengers() {
    return (dispatch, getState) => {
        return axios('http://localhost:8082/avengers/list').then((response) => {
            console.log(response.data);
            dispatch(receivedAvengers(response.data));
        });
    }
}