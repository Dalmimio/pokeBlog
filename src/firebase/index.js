
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyCZ04ToYTU4nNMfbX6OgOd3uYlj2Cpxw20',
  authDomain: 'mipokeblog-95021.firebaseapp.com',
  projectId: 'mipokeblog-95021',
  storageBucket: 'mipokeblog-95021.appspot.com',
  messagingSenderId: '787038432558',
  appId: '1:787038432558:web:551e56bf432572d756debf'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export {app};