import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/database';

var firebaseConfig = {
  apiKey: "AIzaSyDGMrXZ1ob-bFqTGaQUI0nAlZR2IH7wPBg",
  authDomain: "slack-cloning-react.firebaseapp.com",
  projectId: "slack-cloning-react",
  storageBucket: "slack-cloning-react.appspot.com",
  messagingSenderId: "64237170097",
  appId: "1:64237170097:web:9a487ab56d032bcbd06190",
  measurementId: "G-ZFZVL7W4HG"
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
