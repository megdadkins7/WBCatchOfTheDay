import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBkXu8dAEIBt5mjiGAdm5ecoT9U2t0Y1lE",
  authDomain: "catch-of-the-day-meg-adkins.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-meg-adkins.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// this is a default export
export default base;
