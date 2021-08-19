import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
const config = {
    apiKey: "AIzaSyAzFEmi0LlgzkekMrgem6xY2qB7QmqXEKU",
    authDomain: "testfirebase-f276f.firebaseapp.com",
    projectId: "testfirebase-f276f",
    storageBucket: "testfirebase-f276f.appspot.com",
    messagingSenderId: "620626684058",
    appId: "1:620626684058:web:7787e799c80d71a5429723",
    measurementId: "G-MSGTV91PC8"
  };
  


class Firebase {
  constructor() {
    firebase.initializeApp(config).firestore();
    this.auth = firebase.auth();
    // this.db = app.database();

    // this.db = app.firebase.database()
    this.db = firebase.firestore();

  }  
}

export default Firebase;