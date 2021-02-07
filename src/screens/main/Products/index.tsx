import React, { ReactElement } from 'react'
import { useDispatch } from 'react-redux';
import { IProduct } from '../../../services/interfaces/IProducts';
import { Product } from './Product'
import { AddToCart } from '../../../services/redux/actions/addToCart'
var faker = require('faker/locale/en');


export const Products = (): ReactElement => {
    const dispatch = useDispatch()

    const handleClick = (product: IProduct) => {
        dispatch(AddToCart(product));
    }

    const renderProducts = () => [...Array(7)].map(x => <Product
        handleClick={handleClick}
        key={faker.random.number()}
        color={faker.vehicle.color()}
        manufacturer={faker.vehicle.manufacturer()}
        model={faker.vehicle.model()}
        type={faker.vehicle.type()}
        vehicle={faker.vehicle.vehicle()}
        price={faker.commerce.price()}
    />)

    return <div style={{ textAlign: 'center' }}>
        {renderProducts()}
    </div>
}