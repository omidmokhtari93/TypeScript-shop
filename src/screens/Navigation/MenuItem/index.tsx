import React, { ReactElement } from 'react'
import { NavLink } from 'react-router-dom'
import styels from './index.module.scss';
import { useSelector } from 'react-redux';
import { rootState } from '../../../services/redux';

type Props = {
    title: string
    path: string
}

export function MenuItem(props: Props): ReactElement {
    
    const state = useSelector((state: rootState) => state)
    console.log(state)

    return <li>
        <NavLink to={'/' + props.path} activeClassName={styels.isActive}>
            {props.title}
        </NavLink>
    </li>
}