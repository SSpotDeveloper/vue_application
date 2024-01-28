// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCeVeR5S8WKSLH-FKUx27MPtleV8zyHdkw",
  authDomain: "mmsystem-1be34.firebaseapp.com",
  projectId: "mmsystem-1be34",
  storageBucket: "mmsystem-1be34.appspot.com",
  messagingSenderId: "494605564826",
  appId: "1:494605564826:web:1940c512f67433adea5823",
  measurementId: "G-R1ZR8P46JX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const store = getFirestore(app);
const auth = getAuth(app);

export { store, auth }