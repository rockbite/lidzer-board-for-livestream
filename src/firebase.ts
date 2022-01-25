// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    getFirestore,
  } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBciMugIr5LpIXJmdyTru89Rjt399TBkU",
  authDomain: "lidzer-board.firebaseapp.com",
  projectId: "lidzer-board",
  storageBucket: "lidzer-board.appspot.com",
  messagingSenderId: "813311346165",
  appId: "1:813311346165:web:08854c31e4fd8a2cef8cbc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

export {
    app,
    db,
};