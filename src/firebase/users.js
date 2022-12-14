import { app } from "vue";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import user from '../store/profile.js';

const db = getFirestore(app);
const usersRef = collection(db, "users");

const addUser = (user) => {
    addDoc(usersRef,user);
}


// para actualizar el usuario, agregar los datos que quiera cambiar
// const updateUser = (user) => {

// }

export { addUser }