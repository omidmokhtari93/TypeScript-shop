import { cartActionTypes } from "../actionTypes";
import { Reducer } from "redux";
import { dispatchAction } from "../store";
import * as _ from "lodash";

export class cartState {
    id = 0;
    color = "";
    vehicle = "";
    manufacturer = "";
    model = "";
    price = "";
    type = "";
}

export const cartReducer: Reducer<Array<cartState>, dispatchAction> = (
    state: Array<cartState> = new Array<cartState>(),
    action,
) => {
    switch (action.type) {
        case cartActionTypes.ADD_TO_CART:
            const added = _.find(state, action.payload);
            if (added) {
                return [...state];
            }
            return [...state, action.payload];
        case cartActionTypes.REMOVE_ITEM:
            const filter = state.filter((x) => x.id != action.payload.id);
            return [...filter];
        default:
            return [...state];
    }
};
