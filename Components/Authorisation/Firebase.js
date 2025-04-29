// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAiN7SFhBXfbqQ4Iu5GDhEM2AJT0KuDiJM",
  authDomain: "livwell-a24c0.firebaseapp.com",
  projectId: "livwell-a24c0",
  storageBucket: "livwell-a24c0.firebasestorage.app",
  messagingSenderId: "780457783977",
  appId: "1:780457783977:web:b134836d1f918611f66fb8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth()
export default app

const db = getFirestore(app);

export { db };