import React, { Component } from 'react';

import {provider} from '../../firebase.js';

import '../css/Profile.css';

class Profile extends Component {

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

    render() {
        const profile = this.props.currentUser;
        return (
            <div className='container'>
                <div className="profileArea">
                    {this.props.currentUser ? (
                        <div>
                            <img src={profile.photoURL} alt={profile.displayName} />
                            <h1>{profile.displayName}</h1>
                            <h2>{profile.email}</h2>
                        </div>
                    ) : (
                        <a className="action" onClick={this.login.bind(this)}>Log In</a>
                    )}
                    
                </div>
            </div>
        )
    }
}

export default Profile;