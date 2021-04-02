import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/database';

var firebaseConfig = {
  apiKey: "AIzaSyAaMxAAnpiwDX0cssXMEkn5oks-9LNDLJk",
  authDomain: "slack-cloning-2ef42.firebaseapp.com",
  projectId: "slack-cloning-2ef42",
  storageBucket: "slack-cloning-2ef42.appspot.com",
  messagingSenderId: "853876540783",
  appId: "1:853876540783:web:2d40059e71cff89d49549a"
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
