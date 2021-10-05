import firebase from "firebase"
import 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyCWyxeXmpY0Sz4pisdmeiQBVJnFQzpzSKs",
    authDomain: "ferreteria-chaniar.firebaseapp.com",
    projectId: "ferreteria-chaniar",
    storageBucket: "ferreteria-chaniar.appspot.com",
    messagingSenderId: "994446318600",
    appId: "1:994446318600:web:368123875d232c8c8705bd"
};

const app = firebase.initializeApp(firebaseConfig)

export function getFirestore() {
    return firebase.firestore(app)
}