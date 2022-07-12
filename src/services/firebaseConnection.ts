import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDREuLYJpmZCMoLZv2035d_4UyRf0QblOQ",
  authDomain: "boardapp-413e6.firebaseapp.com",
  projectId: "boardapp-413e6",
  storageBucket: "boardapp-413e6.appspot.com",
  messagingSenderId: "461767717245",
  appId: "1:461767717245:web:788b17413c4256bedd1c14",
  measurementId: "G-LCQ6KW0CCG"
};

// Initialize Firebase
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default firebase