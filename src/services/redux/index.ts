import { combineReducers } from "redux";
import { cartReducer, cartState } from "../redux/reducers/cartReducer";

export const rootReducr = combineReducers({
    cart: cartReducer,
});

export interface rootState extends cartState {}

export type rootStateType = ReturnType<typeof rootReducr>;
