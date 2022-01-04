import firebase from "firebase";

let config = {
 
  apiKey: "AIzaSyA9JlUjBqNoO5d1gITMK5Z4eMRZiC1WsFo",
  authDomain: "lyodatatest.firebaseapp.com",
  databaseURL: "https://lyodatatest-default-rtdb.firebaseio.com",
  projectId: "lyodatatest",
  storageBucket: "lyodatatest.appspot.com",
  messagingSenderId: "302792799465",
  appId: "1:302792799465:web:12b5a722079a4f3948ac78",
  measurementId: "G-DBZLYGN235"
};

var fireDb = firebase.initializeApp(config);

export default fireDb.database().ref();
