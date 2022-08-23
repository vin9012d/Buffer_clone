import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import { reducer as Appreducer } from "./Appreducer/reducer";
import { reducer as Authreducer } from "./Authreducer/reducer";

const rootReducer=combineReducers({Appreducer,Authreducer})

export const store=legacy_createStore(rootReducer,applyMiddleware(thunk))
