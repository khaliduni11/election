import { GET_ALL_USERS, ADD_DEADLINE, GET_CANDIDATES, GET_VICE_CANDIDATES, VOTE_FOR_CANDIDATE, VOTE_FOR_VICE_CANDIDATE, EDIT_USER, GET_USER, SEARCHED_USERS } from "../actionTypes";
import axios from "axios";
import { removeError, addError } from "./error";
import { setCurrentUser } from "./authentication";

export const getAllUsers = () => dispatch => {
    return axios.get("/users/all_users")
    .then(res => {
        dispatch(removeError());
        dispatch({
            type: GET_ALL_USERS,
            payload: res.data
        })
    })
    .catch(err => {
        dispatch(addError(err.response.data));
    })
}

export const getCandidate = () => dispatch => {
    return axios.get("/users/candidate")
    .then(res => {
        dispatch(removeError());
        dispatch({
            type: GET_CANDIDATES,
            payload: res.data
        })
    })
    .catch(err => {
        dispatch(addError(err.response.data));
    })
}


export const getViceCandidate = () => dispatch => {
    return axios.get("/users/vice_candidate")
    .then(res => {
        dispatch(removeError());
        dispatch({
            type: GET_VICE_CANDIDATES,
            payload: res.data
        })
    })
    .catch(err => {
        dispatch(addError(err.response.data));
    })
}


export const VoteCandidateChairman = (id) => (dispatch, getState) => {
    const currentUserId = getState().authentication.user._id;
    return axios.put(`/users/vote_candidate_chairman/${id}/${currentUserId}`)
    .then(res => {
        dispatch(removeError());
        dispatch({
            type: VOTE_FOR_CANDIDATE,
            payload: res.data.votedfor
        })
        dispatch(setCurrentUser(res.data.user))
    })
    .catch(err => {
        dispatch(addError(err.response.data));
    })
}


export const voteCandidateViceChairman = (id) => (dispatch, getState) => {
    const currentUserId = getState().authentication.user._id;
    return axios.put(`/users/vote_candidate_vice_chairman/${id}/${currentUserId}`)
    .then(res => {
        dispatch(removeError());
        dispatch({
            type: VOTE_FOR_VICE_CANDIDATE,
            payload: res.data.votedfor
        })
        dispatch(setCurrentUser(res.data.user))
    })
    .catch(err => {
        dispatch(addError(err.response.data));
    })
}


export const updateUser = (id, user) => dispatch => {
    return axios.put(`/users/edit/${id}/`, user)
    .then(res => {
        dispatch(removeError());
        dispatch({
            type: EDIT_USER,
            payload: res.data
        })
    })
    .catch(err => {
        dispatch(addError(err.response.data));
    })
}


export const getUser = (id) => dispatch => {
    return axios.get(`/users/user/${id}`)
    .then(res => {
        dispatch(removeError());
        dispatch({
            type: GET_USER,
            payload: res.data
        })
    })
    .catch(err => {
        dispatch(addError(err.response.data));
    })
}


export const deadline = (date) => dispatch => {
    return axios.put("/users/deadline", {date})
    .then(res => {
        console.log(date)
        dispatch(removeError());
        dispatch({
            type: ADD_DEADLINE,
            payload: res.data
        })
    })
    .catch(err => {
        dispatch(addError(err.response.data));
    })
}

export const searchedUsers = (search) => dispatch =>  {
    return axios.post("/users/search_users", {search})
    .then(res => {
        dispatch({
            type: SEARCHED_USERS,
            payload: res.data.searchedUsers
        })
    })
    .catch(err => {
        dispatch(addError(err.response.data))
    })
}