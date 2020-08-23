import axios from 'axios';
import { receivedAvengerDetails } from './actions.js';
export function fetchAvengerDetail(payload) {
    return (dispatch, getState) => {
        return axios(`http://localhost:8082/avenger/${payload}`).then((response) => {
            console.log(response.data);
            dispatch(receivedAvengerDetails(response.data));
        });
    }
}