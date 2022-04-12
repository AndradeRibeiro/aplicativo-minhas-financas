import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/database';

let firebaseConfig = {
    apiKey: "AIzaSyBYB6MZZnpvUD-GNe-bhLuvpUNEpVmWwNI",
    authDomain: "financas-9dc9d.firebaseapp.com",
    projectId: "financas-9dc9d",
    storageBucket: "financas-9dc9d.appspot.com",
    messagingSenderId: "391438047656",
    appId: "1:391438047656:web:24b8dc284aff45d9f2259d",
    measurementId: "G-FJTDKDLYBF"
}

if(!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;