import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyBuWT_Wf_znKnv32D5zLUv7-HmVWmuzRWk",
  authDomain: "react-bujo.firebaseapp.com",
  projectId: "react-bujo",
  storageBucket: "react-bujo.appspot.com",
  messagingSenderId: "559437972218",
  appId: "1:559437972218:web:b58bd1c36230ca8e2abf43",
  measurementId: "G-RPD4H9NXRQ"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export default db;