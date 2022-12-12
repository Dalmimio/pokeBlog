import { app } from './index.js';
import { getFirestore, collection, doc, deleteDoc, addDoc, onSnapshot, query, where} from "firebase/firestore";
import comments from '../store/comments.js';


const db = getFirestore(app);
const commentsRef = collection(db, "comments");

onSnapshot(commentsRef, (snapshot) => {
    comments.value = []
    snapshot.forEach((doc) => {
        const comment = {
            id: doc.id,
            postId: doc.data().postId,
            body: doc.data().body,
        }
        comments.value.push(comment)
        console.log(comments.value);
    });
})



const deleteComment = (id) => {
    deleteDoc(doc(commentsRef, id));
}

const q = query(collection (db,'usuarios'))


const addComment = (comment) => {
    addDoc(commentsRef,comment);
}
// export { traerUsers, }
export { addComment, deleteComment, comments, db}