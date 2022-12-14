import { app } from './index.js';
import { getFirestore, collection, doc, deleteDoc, addDoc, onSnapshot, query, where} from "firebase/firestore";
import comments from '../store/comments.js';


const db = getFirestore(app);
const commentsRef = collection(db, "comments");

//para obtener los comentarios
const getComments = () => {
  onSnapshot(commentsRef, (snapshot) => {
    comments.value = [];
    snapshot.forEach((doc) => {
      const comment = {
        id: doc.id,
        postId: doc.data().postId,
        body: doc.data().body,
        date: doc.data().date,
        name: doc.data().name,
        email: doc.data().email,
        photo: doc.data().photo,
      };
      //agregando el comentario al array
      comments.value.push(comment);
    });
    //ordenar el array por hora
    comments.value.sort((a,b) => a.date - b.date)
  });
};


//me falta hacer el cbotoncito para eliminar el comentario
const deleteComment = (id) => {
    deleteDoc(doc(commentsRef, id));
}


//no me acuerdo para que puse esto 
// const q = query(collection (db,'usuarios'))

//agregar el comentario a la base de datos
const addComment = (comment) => {
    addDoc(commentsRef,comment);
}




export { addComment, deleteComment, comments, db}