import { app } from './index.js';
import { getFirestore, collection, doc, deleteDoc, addDoc, onSnapshot, updateDoc } from "firebase/firestore";
import posts from '../store/post.js';

const db = getFirestore(app);
const postsRef = collection(db, "posts");

onSnapshot(postsRef, (snapshot) => {
    posts.value = []
    snapshot.forEach((doc) => {
        const post = {
            id: doc.id, 
            body: doc.data().body,
            save: false,
        }
        posts.value.push(post)
        console.log(posts.value);
    });
})

const deletePost = (id) => {
    deleteDoc(doc(postsRef, id));
}


const addPost = (post) => {
    addDoc(postsRef,post);
}

const savePost = (id, change) => {
    updateDoc(doc(postsRef, id), change);    
    // const post = posts.value.find(post => post.id === id);
    // console.log(post);
}


export { addPost, deletePost, posts, postsRef, savePost}