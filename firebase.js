import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUydrN3S3MKxNql-ni-gBiwO36KuUghwQ",
  authDomain: "ogger--2-clone.firebaseapp.com",
  projectId: "ogger--2-clone",
  storageBucket: "ogger--2-clone.appspot.com",
  messagingSenderId: "989038050574",
  appId: "1:989038050574:web:dadb7c46683b558dd02b5f",
  measurementId: "G-MTXD7KS0B4",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export default db;
