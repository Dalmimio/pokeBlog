import { app } from './index.js';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";

const auth = getAuth(app); 
const provider = new GoogleAuthProvider();

const loginWithGoogle = () => {
    signInWithPopup(auth, provider)
    .then((result) => {
        console.log('result', result);
    })
    .catch((error) => {
        console.warn('error', error);
    });
}

const logout = () => {
    signOut(auth)
    .then((result) => {
        console.log('result',result);
    })
    .catch((error) => {
        console.warn('error',error);
    });
}

export { loginWithGoogle, logout }