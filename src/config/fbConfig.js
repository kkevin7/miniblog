import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAndNn7gS4kAj4ZwSm4L4JTyBp5vDJv4a0",
    authDomain: "miniblog-8cd75.firebaseapp.com",
    databaseURL: "https://miniblog-8cd75.firebaseio.com",
    projectId: "miniblog-8cd75",
    storageBucket: "miniblog-8cd75.appspot.com",
    messagingSenderId: "469247937013",
    appId: "1:469247937013:web:1e2aa2ac415050888ef8bc"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


export default firebase;