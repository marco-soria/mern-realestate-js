// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-realestate-js.firebaseapp.com",
  projectId: "mern-realestate-js",
  storageBucket: "mern-realestate-js.appspot.com",
  messagingSenderId: "345416846897",
  appId: "1:345416846897:web:3bbb7991ddb35118dd0f10"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);