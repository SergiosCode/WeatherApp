import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


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
