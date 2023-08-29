// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyajkLNSys6crgXMeanVQvMKfdLIL9EBg",
  authDomain: "sedi-fdd64.firebaseapp.com",
  projectId: "sedi-fdd64",
  storageBucket: "sedi-fdd64.appspot.com",
  messagingSenderId: "749585074452",
  appId: "1:749585074452:web:332642077a2eae890dda01",
  databaseURL:"https://sedi-fdd64-default-rtdb.asia-southeast1.firebasedatabase.app"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);