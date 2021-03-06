import {ADD_ERROR, REMOVE_ERROR} from "../actionTypes";

const error = (state = {error: null}, action) => {
    switch(action.type){
        case ADD_ERROR:
            return {
                ...state,
                error: action.payload
            }
        case REMOVE_ERROR:
            return {
                ...state,
                error: null
            }
        default:
            return state;
    }
}

export default error;