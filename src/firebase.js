import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSMhFmdWdUsnmH8-CyTvhTccLmCctMogw",
  authDomain: "milestone-project-01.firebaseapp.com",
  projectId: "milestone-project-01",
  storageBucket: "milestone-project-01.appspot.com",
  messagingSenderId: "379275362578",
  appId: "1:379275362578:web:85158e291a293cab0873cb",
  measurementId: "G-5N1HE3KVVD",
};
const firebaseapp = firebase.initializeApp(firebaseConfig);
const db = firebaseapp.firestore();
export default db;
