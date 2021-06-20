// most  attributes are # for security reasons

import firebase from "firebase";

const firebaseConfig = {
    apiKey: "###############54",
    authDomain: "amzn-clone-###############.firebaseapp.com",
    projectId: "amzn-clone-###############",
    storageBucket: "amzn-clone-###############.appspot.com",
    messagingSenderId: "###############",
    appId: "###############"
  };

const app =  !firebase.apps.length 
    ? firebase.initializeApp(firebaseConfig)
    : firebase.app();

const db = app.firestore();

export default db;