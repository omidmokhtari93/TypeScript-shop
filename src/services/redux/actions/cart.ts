import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { IProduct } from "../../interfaces/IProducts";
import { cartActionTypes } from "../actionTypes";
import { cartState } from "../reducers/cartReducer";

export const AddToCart = (
    product: IProduct,
): ThunkAction<void, cartState, null, Action<string>> => (dispatch) => {
    dispatch({
        payload: product,
        type: cartActionTypes.ADD_TO_CART,
    });
};

export const RemoveItem = (
    id: number,
): ThunkAction<void, cartState, null, Action<string>> => (dispatch) => {
    dispatch({
        payload: { id },
        type: cartActionTypes.REMOVE_ITEM,
    });
};
