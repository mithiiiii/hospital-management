// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBuiFd5PtFqJ4OH3p6-C6X066J7fACRWh8",
    authDomain: "hospital-management-ead3e.firebaseapp.com",
    projectId: "hospital-management-ead3e",
    storageBucket: "hospital-management-ead3e.appspot.com",
    messagingSenderId: "33802753574",
    appId: "1:33802753574:web:cc2a84dd5c674899df78e7",
    measurementId: "G-8TQN66T41Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export { analytics }