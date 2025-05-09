// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: `${proces.env.FIREBASE_API_KEY}`,
  authDomain: "livwell-a24c0.firebaseapp.com",
  projectId: `${proces.env.FIREBASE_PROJECT_ID}`,
  storageBucket: "livwell-a24c0.firebasestorage.app",
  messagingSenderId:  `${proces.env.FIREBASE_MESSAGING_SENDER_ID}`,
  appId: `${proces.env.FIREBASE_APP_ID}`,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth()
export default app

const db = getFirestore(app);

export { db };

// acet@2023109
