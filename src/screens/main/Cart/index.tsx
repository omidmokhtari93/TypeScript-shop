import React, { ReactElement } from "react";
import { useDispatch, useSelector } from "react-redux";
import { rootStateType } from "../../../services/redux";
import { RemoveItem } from "../../../services/redux/actions/cart";
import Sass from "./index.module.scss";

export const Cart = (): ReactElement => {
    const cart = useSelector((state: rootStateType) => state.cart);
    const dispatch = useDispatch();

    const renderCartItems = () =>
        cart.map((x) => {
            return (
                <li key={x.price}>
                    <div>{`${x.vehicle} ${x.manufacturer} ${x.model} ${x.type} ${x.color}`}</div>
                    <div>{x.price} $</div>
                    <span onClick={() => dispatch(RemoveItem(x.id))}>✕</span>
                </li>
            );
        });

    return (
        <div className={Sass.container}>
            <ul>{renderCartItems()}</ul>
        </div>
    );
};
