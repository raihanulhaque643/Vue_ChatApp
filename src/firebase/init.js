// Your web app's Firebase configuration
import firebase from 'firebase'
import firestore from 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyCE9zszyuogsW-9vRnr74iDIGUpjkuc78M",
    authDomain: "vue-chatapp-c0ba7.firebaseapp.com",
    databaseURL: "https://vue-chatapp-c0ba7.firebaseio.com",
    projectId: "vue-chatapp-c0ba7",
    storageBucket: "vue-chatapp-c0ba7.appspot.com",
    messagingSenderId: "215689727159",
    appId: "1:215689727159:web:0951ffc65a39e483a81132"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
//   firebaseApp.firestore().settings({ timestampsInSnapshots: true })

  export default firebaseApp.firestore()

