import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDJytofjkHVSbw_lUcZ9Ogy_QpZP-p4mT8",
    authDomain: "n-sta-c7cfa.firebaseapp.com",
    projectId: "n-sta-c7cfa",
    storageBucket: "n-sta-c7cfa.appspot.com",
    messagingSenderId: "1053917340312",
    appId: "1:1053917340312:web:82f8f3fed3a074d988e6ed",
    measurementId: "G-WFELDR8S6F"
};



const firebaseApp = firebase.initializeApp(firebaseConfig); // connects everything to firebase
const db = firebaseApp.firestore(); // access to database
const auth = firebase.auth();       // access to authentication

export { db, auth };                // need access to these elsewhere