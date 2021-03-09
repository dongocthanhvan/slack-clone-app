import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/database';

var firebaseConfig = {
  apiKey: "AIzaSyDR-0DZk0J7Dsi_Vd3xvPWVQeQYyYksfz8",
  authDomain: "slack-app-9d55b.firebaseapp.com",
  projectId: "slack-app-9d55b",
  storageBucket: "slack-app-9d55b.appspot.com",
  messagingSenderId: "50471540621",
  appId: "1:50471540621:web:c7d026226e3f09ad4e4fc4",
  measurementId: "G-L76X1Y25NT"
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;