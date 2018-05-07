import React, { Component } from 'react';

import logo from '../../assets/images/Fishbowl-Text.svg';
import '../css/Header.css';

class Header extends Component {
    login() {
        this.props.auth.login();
    }
    
    logout() {
        this.props.auth.logout();
    }

    render () {
        let isAuthenticated = this.props.auth.isAuthenticated();
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <div className="mainLinks">
                    <a href="/home">Home</a>
                    {isAuthenticated ? (<a href="/profile">Profile</a>) : null}
                </div>
                <div className="authButtons">
                    {isAuthenticated ? 
                    (<a onClick={this.logout.bind(this)}>Log Out</a>) :
                    (<a className="action" onClick={this.login.bind(this)}>Log In</a>)
                    }
                </div>
            </header>
        );
    }
}

export default Header;