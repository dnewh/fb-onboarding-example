import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCWACpuXsd3z8429KkvK5FNWU6tVRh7mOo",
    authDomain: "fishbowl-onboarding-demo.firebaseapp.com",
    databaseURL: "https://fishbowl-onboarding-demo.firebaseio.com",
    projectId: "fishbowl-onboarding-demo",
    storageBucket: "fishbowl-onboarding-demo.appspot.com",
    messagingSenderId: "133493972520"
};
firebase.initializeApp(config);

const provider = new firebase.auth.GoogleAuthProvider();
const auth = firebase.auth();

export {provider, auth};
export default firebase;