import {combineReducers, createStore} from "redux";
import tickerReducer from "./ticker-reducer";

let reducers = combineReducers({
    tickerPage: tickerReducer
});

export let store = createStore(reducers);

window.store = store;
