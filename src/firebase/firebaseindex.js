import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/app';

// var firebaseConfig = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTHDOMAIN,
//   databaseURL: process.env.REACT_APP_BASEURL,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGEBUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_APP_ID,
// };
var firebaseConfig = {
  apiKey: 'AIzaSyBeZWwmEwXFo9PTb_HEdJfTpic0wgjC10s',
  authDomain: 'movie-list-app-d6d63.firebaseapp.com',
  databaseURL: 'https://movie-list-app-d6d63.firebaseio.com',
  projectId: 'movie-list-app-d6d63',
  storageBucket: 'movie-list-app-d6d63.appspot.com',
  messagingSenderId: '294880965749',
  appId: '1:294880965749:web:6dfa71ee02a3bbd315f43c',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
firebase.auth();

export default {
  firebaseConfig,
};
