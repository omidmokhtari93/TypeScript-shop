import { rootStore } from '../../interfaces/IStore'
import { IProduct } from '../../interfaces/IProducts'
import { AddToCartAction } from '../actions/addToCart'
import { ADD_TO_CART } from '../actionTypes'
import { Reducer } from 'redux'

class cartReducer {
    color = '';
    vehicle = '';
    manufacturer = '';
    model = '';
    price = '';
    type = '';
}


export const CartReducer = (state = new cartReducer(), action: AddToCartAction) => {
    //console.log(state, action.payload)
    switch (action.type) {
        case ADD_TO_CART:
            return [
                state,
                action.payload
            ]
        default:
            return state;
    }
}