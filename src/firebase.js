import * as firebase from 'firebase';
import config from './config/firebase.json';

firebase.initializeApp(config);

const provider = new firebase.auth.GoogleAuthProvider();
const auth = firebase.auth();

export {provider, auth};
export default firebase;