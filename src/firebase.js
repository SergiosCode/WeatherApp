import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyCk1U2CF3PvEKShdg-EmIHI0b1x9fwIaiw",
  authDomain: "weather-app-ad7ea.firebaseapp.com",
  projectId: "weather-app-ad7ea",
  storageBucket: "weather-app-ad7ea.appspot.com",
  messagingSenderId: "184449358007",
  appId: "1:184449358007:web:e4db9be2f76bfcf1d09532",
  measurementId: "G-3FCY0NREE0"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = firebase
