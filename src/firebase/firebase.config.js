// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBiuM0LfXEWf_EkKdw7IA7KHf02qrc_FUg",
  authDomain: "auth-firebase-repo.firebaseapp.com",
  projectId: "auth-firebase-repo",
  storageBucket: "auth-firebase-repo.firebasestorage.app",
  messagingSenderId: "558157477861",
  appId: "1:558157477861:web:aa5befbd056816bbe8a10c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;