import React, { Component } from 'react';
import * as firebaseui from 'firebaseui';
import * as firebase from 'firebase';

class Login extends Component {
    componentDidMount() {
        const host = window.location.host;
        const uiConfig = {
            signInSuccessUrl: `/`,
            signInOptions: [
              // Leave the lines as is for the providers you want to offer your users.
              firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            //   firebase.auth.FacebookAuthProvider.PROVIDER_ID,
            //   firebase.auth.TwitterAuthProvider.PROVIDER_ID,
            //   firebase.auth.GithubAuthProvider.PROVIDER_ID,
              firebase.auth.EmailAuthProvider.PROVIDER_ID,
            //   firebase.auth.PhoneAuthProvider.PROVIDER_ID
            ],
            // Terms of service url.
            // tosUrl: '<your-tos-url>'
        };
        let ui = new firebaseui.auth.AuthUI(firebase.auth());
        ui.start('#authContainer', uiConfig);
    }
    render() {

        return (
            <div id="authContainer">

            </div>
        )
    }
}

export default Login;