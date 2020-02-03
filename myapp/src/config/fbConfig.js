import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyDKfqE38GfQJSKrNRU098KOFdDkoVLGW9g",
    authDomain: "mattsprac.firebaseapp.com",
    databaseURL: "https://mattsprac.firebaseio.com",
    projectId: "mattsprac",
    storageBucket: "mattsprac.appspot.com",
    messagingSenderId: "742293528324",
    appId: "1:742293528324:web:0e694da1a193e9d9e4fa51",
    measurementId: "G-ZX8WGDLTX6"
};
firebase.initializeApp(firebaseConfig)
firebase.firestore().settings({timestampsInSnapshots: true})

export default firebase;