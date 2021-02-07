import { applyMiddleware, combineReducers, createStore } from "redux";
import { CartReducer } from "./reducers/cartReducer";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import thunk, { ThunkMiddleware } from "redux-thunk";

const rootReducr = combineReducers({
    cart: CartReducer
})

export const store = createStore(rootReducr, composeWithDevTools(applyMiddleware(thunk)));
