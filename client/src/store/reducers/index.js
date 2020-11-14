import {combineReducers} from "redux";
import authentication from "./authentication";
import error from "./error";
import users from "./user"


const reducers = combineReducers({
    authentication,
    error,
    users
})

export default reducers;
