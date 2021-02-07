import React, { Component } from 'react'
import { Navigation } from './Navigation'
import { Routes } from './Routes'
import styles from './AppContainer.module.scss'


class AppContainer extends Component {
    render() {
        return <React.Fragment>
            <Navigation />
            <div className={styles.body}>
                <Routes />
            </div>
        </React.Fragment>
    }
}


export default AppContainer;