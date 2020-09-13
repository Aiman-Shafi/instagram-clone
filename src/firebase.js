import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCx3dViE1oDsNSf8JhHs962r4_2Zj9HVdA",
    authDomain: "instagram-clone-871fa.firebaseapp.com",
    databaseURL: "https://instagram-clone-871fa.firebaseio.com",
    projectId: "instagram-clone-871fa",
    storageBucket: "instagram-clone-871fa.appspot.com",
    messagingSenderId: "741261387571",
    appId: "1:741261387571:web:0331d804ac382d39d2c046",
    measurementId: "G-B1S7L66ELK"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {db, auth, storage};