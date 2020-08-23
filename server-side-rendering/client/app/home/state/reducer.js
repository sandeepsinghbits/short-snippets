import {FETCH_AVENGERS} from './actionTypes'

const initialState = {
    avengers: []
};
export default function(state=initialState, action){
    switch(action.type){
        case FETCH_AVENGERS:
            return { avengers: action.payload};
        default:
            return state;
    }

}