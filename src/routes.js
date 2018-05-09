import React from 'react';
import { Router } from 'react-router-dom';

import App from './components/containers/App';

import {auth} from './firebase.js';
import history from './history';

export const makeMainRoutes = () => {

    let styles = {
        position: 'fixed',
        top: 0,
        left: 0,
        height: '100vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
    }

    return (
        <Router history={history} component={App}>
                <App auth={auth} style={styles} />
        </Router>
    );
}