// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0XvwYWsaPvKEmEohzx9Y8pHbFi8veFxA",
  authDomain: "the-news-dragon-ee2ad.firebaseapp.com",
  projectId: "the-news-dragon-ee2ad",
  storageBucket: "the-news-dragon-ee2ad.appspot.com",
  messagingSenderId: "864250048797",
  appId: "1:864250048797:web:1f56e34aa5a39f12a971f4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;