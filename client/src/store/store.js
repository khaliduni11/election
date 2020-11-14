import reducers from "./reducers/index";
import {createStore, compose, applyMiddleware} from "redux";
import thunk from "redux-thunk"

const store = createStore(reducers, compose(applyMiddleware(thunk), window.devToolsExtension ? window.devToolsExtension() : f => f));

export default store;