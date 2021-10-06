import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCoTGV1IGcstqRuXyTVpnNf3prUP7d9hJQ",
    authDomain: "foody-food-baker.firebaseapp.com",
    projectId: "foody-food-baker",
    storageBucket: "foody-food-baker.appspot.com",
    messagingSenderId: "966901276654",
    appId: "1:966901276654:web:30db9a7ab90919fdca78ff",
    measurementId: "G-9CG0HE479T"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
export default db;