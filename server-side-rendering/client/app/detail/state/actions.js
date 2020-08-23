import {FETCH_AVENGER_DETAIL} from './actionTypes'

export const receivedAvengerDetails = (payload) => {
    return {
        type: FETCH_AVENGER_DETAIL,
        payload
    }
}