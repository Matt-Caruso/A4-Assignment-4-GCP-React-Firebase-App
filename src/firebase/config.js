import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCs1cHPlOoI3XIqXUQ-oP3rod-OcBa3e8E",
  authDomain: "matt-firebase-84bae.firebaseapp.com",
  databaseURL: "https://matt-firebase-84bae.firebaseio.com",
  projectId: "matt-firebase-84bae",
  storageBucket: "matt-firebase-84bae.appspot.com",
  messagingSenderId: "279538865177",
  appId: "1:279538865177:web:b18215ecaab16974bb4688"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firebase();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;


export{projectStorage, projectFirestore, timestamp};
