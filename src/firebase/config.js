import app from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyD6ul0EUkdF3E_yZ8bf9ZiqWVdxD-lCymk",
    authDomain: "joblistingapp-ab951.firebaseapp.com",
    projectId: "joblistingapp-ab951",
    storageBucket: "joblistingapp-ab951.appspot.com",
    messagingSenderId: "33991630731",
    appId: "1:33991630731:web:31509601d005385ac3598e",
    measurementId: "G-XTZSF94LTX"
  };
  // Initialize Firebase
  const firebase = app.initializeApp(firebaseConfig);
  const firestore = firebase.firestore();

  export {firebase,firestore,app};