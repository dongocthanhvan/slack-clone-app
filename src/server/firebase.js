import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/database';

var firebaseConfig = {
    apiKey: "AIzaSyCTj5uSDN62XQBV8VsPHBVivLtb1oX4ZGU",
    authDomain: "slack-application-b9926.firebaseapp.com",
    projectId: "slack-application-b9926",
    storageBucket: "slack-application-b9926.appspot.com",
    messagingSenderId: "124377776339",
    appId: "1:124377776339:web:abfb861284feea8911d426"
  };
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
