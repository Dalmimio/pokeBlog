import { app } from './index.js';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import user from '../store/profile.js';
import { addUser } from './users.js';

const auth = getAuth(app); 
const provider = new GoogleAuthProvider();


//login con google
const loginWithGoogle = () => {
    signInWithPopup(auth, provider)
    .then((result) => {
        console.log('result', result);
        // user.value = result.user;
        // hacer logica para buscar el mail en la base
        // si esta, no hacer nada pero si no esta, agregarlo
        let newUser = {
            displayName: result.user.displayName,
            photoURL: result.user.photoURL,
            email: result.user.email,
        }
        localStorage.setItem('user',JSON.stringify(newUser))
        user.value = {
            ...newUser
        }
        // addUser(newUser);
    })
    .catch((error) => {
        console.warn('error', error);
    });
}

//logout
const logout = () => {
    auth.signOut(auth)
    .then(() => {
        console.log('logout');
        user.value = null;
        localStorage.setItem('user',null)
    })
    .catch((error) => {
        console.warn('error',error);
    });
}

export { loginWithGoogle, logout, user }