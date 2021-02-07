import React, { ReactElement } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Cart } from '../main/Cart'
import { Home } from '../main/Home'
import { Products } from '../main/Products'



export const Routes = (): ReactElement => {
    return <Switch>
        <Route path="/home" component={Home} />
        <Route path="/products" component={Products} />
        <Route path="/cart" component={Cart} />
    </Switch>
}