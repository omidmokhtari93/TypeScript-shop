import { IProduct } from '../../interfaces/IProducts'
import { cartActionTypes } from '../actionTypes'
import { dispatchAction } from '../store'



export const AddToCart = (product: IProduct): dispatchAction => {
    //console.log(product)
    return {
        payload: product,
        type: cartActionTypes.ADD_TO_CART
    }
}