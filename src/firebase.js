import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyBeZWwmEwXFo9PTb_HEdJfTpic0wgjC10s",
  authDomain: "movie-list-app-d6d63.firebaseapp.com",
  databaseURL: "https://movie-list-app-d6d63.firebaseio.com",
  projectId: "movie-list-app-d6d63",
  storageBucket: "movie-list-app-d6d63.appspot.com",
  messagingSenderId: "294880965749",
  appId: "1:294880965749:web:6dfa71ee02a3bbd315f43c",
};
const fire = firebase.initializeApp(firebaseConfig);

export default fire;
