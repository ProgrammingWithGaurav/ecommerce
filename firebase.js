import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCjWcWPbKsXCs93mww6B7VWid4RkiRPYxA",
  authDomain: "react-native-projects-80c2f.firebaseapp.com",
  projectId: "react-native-projects-80c2f",
  storageBucket: "react-native-projects-80c2f.appspot.com",
  messagingSenderId: "698804821287",
  appId: "1:698804821287:web:ae7e4231c8d414e4c69d02",
  measurementId: "G-2Q11MD6QJX"
};

// Initialize Firebase
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
const db = firebase.firestore();

export {firebase, db};