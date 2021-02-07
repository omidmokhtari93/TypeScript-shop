import { Action, applyMiddleware, combineReducers, createStore } from "redux";
import { CartReducer } from "./reducers/cartReducer";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import thunk from "redux-thunk";
import { rootState } from ".";

export interface dispatchAction extends Action {
    payload: rootState
}

const rootReducr = combineReducers({
    cart: CartReducer
})

export const store = createStore(rootReducr, composeWithDevTools(applyMiddleware(thunk)));
