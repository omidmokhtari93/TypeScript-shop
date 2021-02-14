import React, { ReactElement } from 'react'
import styles from './index.module.scss'
import { IProduct } from '../../../../services/interfaces/IProducts'
import { useDispatch } from 'react-redux'
import { AddToCart } from '../../../../services/redux/actions/addToCart'

export const Product = (props: IProduct): ReactElement => {
    const dispatch = useDispatch();

    const renderProduct = () => <div className={styles.product}>
        <p>Vehicle : {props.vehicle}</p>
        <p>Manufacturer : {props.manufacturer}</p>
        <p>Model : {props.model}</p>
        <p>Type : {props.type}</p>
        <p>Color : {props.color}</p>
        <button onClick={() => dispatch(AddToCart(props))}>
            <span>{props.price}$</span>
            <span>Add To Cart</span>
        </button>
    </div>

    return renderProduct()
}