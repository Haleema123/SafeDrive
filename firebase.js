//Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBazo3ASvah_kRXHdNq6BgcQGnT5hkJWt4",
  authDomain: "safedrive-13c1b.firebaseapp.com",
  projectId: "safedrive-13c1b",
  storageBucket: "safedrive-13c1b.appspot.com",
  messagingSenderId: "426647109610",
  appId: "1:426647109610:web:d755a60122ba75df75bc93",
  measurementId: "G-MYRLXH03BS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
export { auth, db, storage };

