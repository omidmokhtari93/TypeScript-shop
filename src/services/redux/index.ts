import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";
import browserHistory from "../browserHistory";
import { cartReducer, cartState } from "../redux/reducers/cartReducer";

export const rootReducr = combineReducers({
    cart: cartReducer,
    router: connectRouter(browserHistory)
});

export interface rootState extends cartState { }

export type rootStateType = ReturnType<typeof rootReducr>;
