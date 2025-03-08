// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzPzDQHVqJxplPFj4RQUMjJykpz3DVd4A",
  authDomain: "steamy-beans.firebaseapp.com",
  projectId: "steamy-beans",
  storageBucket: "steamy-beans.firebasestorage.app",
  messagingSenderId: "852750257372",
  appId: "1:852750257372:web:1b73a0dc121fc168fef819"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;