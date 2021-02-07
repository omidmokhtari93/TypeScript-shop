import React, { ReactElement } from 'react'
import styles from './index.module.scss'
import { IProduct } from '../../../../services/interfaces/IProducts'

export const Product = (props: IProduct): ReactElement => {
    //console.log(props)
    return <div className={styles.product}>
        <p>Vehicle : {props.vehicle}</p>
        <p>Manufacturer : {props.manufacturer}</p>
        <p>Model : {props.model}</p>
        <p>Type : {props.type}</p>
        <p>Color : {props.color}</p>
        <button onClick={() => props.handleClick(props)}>
            <span>{props.price}$</span>
            <span>Add To Cart</span>
        </button>
    </div>
}