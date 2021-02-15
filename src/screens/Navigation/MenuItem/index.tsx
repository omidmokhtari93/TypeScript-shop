import React, { ReactElement } from "react";
import { NavLink } from "react-router-dom";
import Sass from "./index.module.scss";
import { useSelector } from "react-redux";
import { rootStateType } from "../../../services/redux";

type Props = {
    title: string;
    path: string;
};

export function MenuItem(props: Props): ReactElement {
    const state = useSelector((state: rootStateType) => state.cart);

    return (
        <li>
            <NavLink to={"/" + props.path} activeClassName={Sass.isActive}>
                {props.title}{" "}
                {state.length && props.title == "Cart"
                    ? `(${state.length})`
                    : ""}
            </NavLink>
        </li>
    );
}
