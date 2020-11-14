import {CURRENT_USER, VOTE_FOR_CANDIDATE, VOTE_FOR_VICE_CANDIDATE} from "../actionTypes";

const initialState = {
    isAuthenticated: false,
    user: {}
}

const authentication = (state = initialState, action) => {
    switch(action.type){
        case CURRENT_USER:
            return {
                ...state,
                isAuthenticated: !!Object.keys(action.payload).length,
                user: action.payload,
            }
        case VOTE_FOR_CANDIDATE:
            return {
                ...state,
                user: action.payload
            }
        case VOTE_FOR_VICE_CANDIDATE:
            return {
                ...state,
                user: action.payload
            }
        default: return state;
    }
}

export default authentication;