import {
    GET_ALL_USERS, GET_CANDIDATES, GET_VICE_CANDIDATES, EDIT_USER, GET_USER, ADD_DEADLINE, VOTE_FOR_CANDIDATE, VOTE_FOR_VICE_CANDIDATE, SEARCHED_USERS
} from "../actionTypes";

const initialState = {
    users: [],
    candidates: [],
    viceCandidates: [],
    user: {},
    message: null,
    searchedUsers: []
}

const users = (state = initialState, action) => {
    switch(action.type){
        case GET_ALL_USERS:
            return {
                ...state,
                users: action.payload
            }
        case GET_CANDIDATES:
            return {
                ...state,
                candidates: action.payload
            }
        case GET_VICE_CANDIDATES:
            return {
                ...state,
                viceCandidates: action.payload
            }
        case EDIT_USER:
            return {
                ...state,
                users: [action.payload, state.users.users.filter(user => user._id !== action.payload._id)]
            }
        case GET_USER:
            return {
                ...state,
                user: action.payload
            }
        case VOTE_FOR_CANDIDATE:
            return {
                ...state, 
                candidates: [action.payload, state.candidates.candidates.filter(candidate => candidate._id !== action.payload._id)]
            }
        case VOTE_FOR_VICE_CANDIDATE:
            return {
                ...state,
                viceCandidates: [action.payload, state.viceCandidates.viceCandidates.filter(viceCandidate => viceCandidate._id !== action.payload._id)]
            }
        case ADD_DEADLINE:
            return {
                ...state,
                message: action.payload
            }
        case SEARCHED_USERS:
            return {
                ...state,
                searchedUsers: action.payload
            }
        default:
            return state;
    }
}

export default users;