import { Action, applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import thunk from "redux-thunk";
import { rootReducr, rootState } from ".";

export interface dispatchAction extends Action {
    payload: rootState;
}

export const store = createStore(
    rootReducr,
    composeWithDevTools(applyMiddleware(thunk)),
);
