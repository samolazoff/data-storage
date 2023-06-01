import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import userReducer from "./userReducer";
import fileReduser from "./fileReduser";


const rootReducer = combineReducers({
    user: userReducer,
    file: fileReduser
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))