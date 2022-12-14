import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { compose } from "redux";
import thunk from "redux-thunk";
import { reducer as AppReducer } from "./AppReducer/reducer";
import {reducer as AuthReducer } from "./AuthReducer/reducer";



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const rootReducer=combineReducers({AppReducer,AuthReducer})


export const store = legacy_createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)));




