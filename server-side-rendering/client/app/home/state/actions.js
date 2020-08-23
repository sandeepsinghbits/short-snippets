import {FETCH_AVENGERS} from './actionTypes'

export const receivedAvengers = (payload) => {
    return {
        type: FETCH_AVENGERS,
        payload
    }
}