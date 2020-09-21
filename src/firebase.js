import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyATFIo1aDyXWecJgNTEZ4OXIQ6in64wfm4",
    authDomain: "e-clone-29ada.firebaseapp.com",
    databaseURL: "https://e-clone-29ada.firebaseio.com",
    projectId: "e-clone-29ada",
    storageBucket: "e-clone-29ada.appspot.com",
    messagingSenderId: "1080691915117",
    appId: "1:1080691915117:web:e8f129fb2a02158d7ac264",
    measurementId: "G-P5Q0R9LK8N"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };