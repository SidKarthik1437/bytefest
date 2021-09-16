import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCE3hQiHNextnROhTzeywSm6uHYHi01wec",
  authDomain: "bytefest-60964.firebaseapp.com",
  projectId: "bytefest-60964",
  storageBucket: "bytefest-60964.appspot.com",
  messagingSenderId: "418745980017",
  appId: "1:418745980017:web:ed48f5bfcfa14fd3a0b7d0",
  measurementId: "G-82NE9GHKCQ"
});

const db = firebaseApp.firestore();

export default db;