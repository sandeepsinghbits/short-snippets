import {FETCH_AVENGER_DETAIL} from './actionTypes'

const initialState = {
    avenger: {powers:[]}
};
export default function(state=initialState, action){
    switch(action.type){
        case FETCH_AVENGER_DETAIL:
            return { avenger: action.payload};
        default:
            return state;
    }

}