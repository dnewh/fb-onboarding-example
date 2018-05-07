import React from 'react';
import { Route, Router } from 'react-router-dom';
import App from './App';
import Home from './components/js/Home';
import Callback from './components/js/Callback';
import Header from './components/js/Header';
import Profile from './components/js/Profile';
import Auth from './Auth';
import history from './history';

const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
    if (/access_token|id_token|error/.test(nextState.location.hash)) {
        auth.handleAuthentication();
    }
}

export const makeMainRoutes = () => {
    let props = this.props;

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
            <div className="pageContainer" style={styles}>
                <Header auth={auth} {...props} />
                <Route exact path="/" render={(props) => <Home auth={auth} {...props} />} />
                <Route path="/home" render={(props) => <Home auth={auth} {...props} />} />
                <Route path="/profile" render={(props) => <Profile auth={auth} {...props} />} />
                <Route path="/callback" render={(props) => {
                handleAuthentication(props);
                return <Callback {...props} /> 
                }}/>
            </div>
        </Router>
    );
}