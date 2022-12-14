import { app } from './index.js';
import { getFirestore, collection, doc, deleteDoc, addDoc, onSnapshot, updateDoc } from "firebase/firestore";
import posts from '../store/post.js';

const db = getFirestore(app);
const postsRef = collection(db, "posts");


//para obtener los posteos
const getPost = () => {
    onSnapshot(postsRef, (snapshot) => {
        posts.value = []
        snapshot.forEach((doc) => {
            //armar los posteos
            const post = {
                id: doc.id, 
                body: doc.data().body,
                date: doc.data().date,
                name: doc.data().name,
                email: doc.data().email,
                photo: doc.data().photo,
                save: false,
            }
            //agregar el post al array y luego ordenarlos segun la fecha que se subio
            posts.value.push(post)
            posts.value.sort((a,b)=> b.date - a.date)
        });
    })
    
}

const deletePost = (id) => {
    deleteDoc(doc(postsRef, id));
}


const addPost = (post) => {
    addDoc(postsRef,post);
}


// se supone que tiene que actualizar el posteo, pero no lo hace (por ahora) U-U
const savePost = (id, change) => {
    updateDoc(doc(postsRef, id), change);    
    // const post = posts.value.find(post => post.id === id);
    // console.log(post);
}


export { addPost, deletePost, posts, postsRef, savePost, getPost}