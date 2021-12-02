// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCyaEHW-ANZxszGZwWMZZzKXIypnAMQlo4",
  authDomain: "weather-app-45f17.firebaseapp.com",
  projectId: "weather-app-45f17",
  storageBucket: "weather-app-45f17.appspot.com",
  messagingSenderId: "341213972390",
  appId: "1:341213972390:web:c8bc718a0681a2b2197167",
  measurementId: "G-XBM0Z67PLB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase();
