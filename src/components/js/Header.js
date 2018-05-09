import React, { Component } from 'react';

import {provider} from '../../firebase.js';

import logo from '../../assets/images/Fishbowl-Text.svg';
import '../css/Header.css';

class Header extends Component {
    
    logout() {
        let self = this;
        self.props.auth.signOut()
            .then(() => {
                self.props.actions.deleteUser();
            })
    }

    login() {
        let self = this;
        self.props.auth.signInWithPopup(provider)
            .then((result) => {
                const user = {
                    displayName: result.user.displayName,
                    email: result.user.email,
                    photoURL: result.user.photoURL
                };
                self.props.actions.addUser(user);
            })
    }

    render () {
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <div className="mainLinks">
                    <a href="/home">Home</a>
                    {this.props.currentUser ? (<a href="/profile">Profile</a>) : null}
                </div>
                <div className="authButtons">
                    {this.props.currentUser ? 
                    (<a onClick={this.logout.bind(this)}>Log Out</a>) :
                    (<a className="action" onClick={this.login.bind(this)}>Log In</a>)
                    }
                </div>
            </header>
        );
    }
}

export default Header;