import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import board from "./modules/board";
import {createBrowserHistory} from "history";

export const history = createBrowserHistory();

const middlewares = [thunk];

const enhancer = applyMiddleware(...middlewares);
const rootReducer = combineReducers({board});

const store = createStore(rootReducer, enhancer);

export default store;