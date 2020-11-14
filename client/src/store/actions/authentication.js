import { ADD_ERROR, CURRENT_USER } from "../actionTypes";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { setAuthToken } from "../../token/setAuthToken";
import { removeError } from "./error";

export const setCurrentUser = (user) => {
    return {
        type: CURRENT_USER,
        payload: user
    }
}

export const logout = () => dispatch => {
    localStorage.removeItem("jwtToken");
    setAuthToken(false);
    dispatch(setCurrentUser({}))
    dispatch(removeError());
}

export const auth = (path, post) => dispatch => {
    return axios.post(`/user/authentication/${path}`, post)
        .then(res => {
            const {token} = res.data;
            const decoded = jwtDecode(token);
            setAuthToken(token)
            localStorage.setItem("jwtToken", token);
            dispatch(setCurrentUser(decoded.user));
            dispatch(removeError());
        })
        .catch(err => {
            dispatch({
                type: ADD_ERROR,
                payload: err.response.data
            })
        })
}


