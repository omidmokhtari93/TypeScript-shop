import React, { ReactElement } from 'react'
import { NavLink } from 'react-router-dom'
import styels from './index.module.scss';
import { store } from '../../../services/redux/store'
import { useSelector } from 'react-redux';
import { rootStore } from '../../../services/interfaces/IStore'

type Props = {
    title: string
    path: string
}

export function MenuItem(props: Props): ReactElement {
    const state = useSelector((state: rootStore) => state)

    console.log(state)

    return <li>
        <NavLink to={'/' + props.path} activeClassName={styels.isActive}>
            {props.title}
        </NavLink>
    </li>
}