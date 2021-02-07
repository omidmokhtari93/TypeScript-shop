import { combineReducers, createStore } from "redux";
import { CartReducer } from "./reducers/cartReducer";

const rootReducr = combineReducers({
    cart: CartReducer
})

export const store = createStore(rootReducr);
