import { cartActionTypes } from '../actionTypes'
import { Reducer } from 'redux'
import { dispatchAction } from '../store'

export class cartState {
    color = ''
    vehicle = ''
    manufacturer = ''
    model = ''
    price = ''
    type = ''
}

export const CartReducer: Reducer<cartState, dispatchAction> = (
    state = new cartState(),
    action
) => {
    switch (action.type) {
        case cartActionTypes.ADD_TO_CART:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}