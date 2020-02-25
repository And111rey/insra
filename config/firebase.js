
import firebase from "firebase"
require('firebase/firestore')


  const firebaseConfig = {
    apiKey: "AIzaSyCnAovr9QuRstDrjhcOWSM1JHDbf8Sq2dQ",
    authDomain: "insta-c3725.firebaseapp.com",
    databaseURL: "https://insta-c3725.firebaseio.com",
    projectId: "insta-c3725",
    storageBucket: "insta-c3725.appspot.com",
    messagingSenderId: "844669244708",
    appId: "1:844669244708:web:d8200dcaeaac38f14b4fb1",
    measurementId: "G-ZKSD3B91FP"
  };
  const initialize = firebase.initializeApp(firebaseConfig);

  
  const db = firebase.firestore()

// db.settings({
//   timestampsInSnapshots: true
// })

  export default db
  