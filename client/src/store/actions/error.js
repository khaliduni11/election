import {ADD_ERROR, REMOVE_ERROR} from "../actionTypes";


export const addError = (err) => {
    return {
        type: ADD_ERROR,
        payload: err
    }
}

export const removeError = () => {
    return {
        type: REMOVE_ERROR
    }
}