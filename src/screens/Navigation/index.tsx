import React from "react";
import { MenuItem } from "./MenuItem/index";
import Sass from "./index.module.scss";

const menu = [
    { title: "Home", path: "home" },
    { title: "Products", path: "products" },
    { title: "Cart", path: "cart" },
    { title: "Account", path: "account" },
];

export function Navigation() {
    return (
        <React.Fragment>
            <ul className={Sass.navigation}>
                {menu.map((x) => (
                    <MenuItem key={x.path} title={x.title} path={x.path} />
                ))}
            </ul>
        </React.Fragment>
    );
}
