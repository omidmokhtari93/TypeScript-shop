import React, { ReactElement } from 'react'
import { Product } from './Product'
var faker = require('faker/locale/en');

export const Products = (): ReactElement => {
    const renderProducts = () => [...Array(7)].map(x => <Product
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