// Import the functions you need from the SDKs you need
import{getFirestore}from "firebase/firestore"
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDDp8TGDWnkzX4mgP11dJLyYNq5waqefv0",
    authDomain: "noodledoodle-52c8e.firebaseapp.com",
    projectId: "noodledoodle-52c8e",
    storageBucket: "noodledoodle-52c8e.appspot.com",
    messagingSenderId: "169269206605",
    appId: "1:169269206605:web:d23a4dcfc8c1d9014fc604",
    measurementId: "G-NQW9E5CBN2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app)
const db=getFirestore(app)
export default db