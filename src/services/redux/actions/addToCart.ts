import { IProduct } from '../../interfaces/IProducts'
import { ADD_TO_CART } from '../actionTypes'

export type AddToCartAction = {
    payload: IProduct
    type: typeof ADD_TO_CART
}

export const AddToCart = (product: IProduct): AddToCartAction => {
    //console.log(product)
    return {
        payload: product,
        type: ADD_TO_CART
    }
}