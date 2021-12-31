import firebase from "firebase/app";
import "firebase/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyA9JlUjBqNoO5d1gITMK5Z4eMRZiC1WsFo",
  authDomain: "lyodatatest.firebaseapp.com",
  databaseURL: "https://lyodatatest-default-rtdb.firebaseio.com",
  projectId: "lyodatatest",
  storageBucket: "lyodatatest.appspot.com",
  messagingSenderId: "302792799465",
  appId: "1:302792799465:web:12b5a722079a4f3948ac78",
  measurementId: "G-DBZLYGN235"
});

const firestore = firebase.firestore();
export default firestore;
