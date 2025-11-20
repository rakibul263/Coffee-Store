// hasan23105101263@gmail.com er mail e firebase setup kora ase
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAirRB4yh2uU1cmSXG3iBRLoCfX5fRep5w",
  authDomain: "coffee-shop-764d6.firebaseapp.com",
  projectId: "coffee-shop-764d6",
  storageBucket: "coffee-shop-764d6.firebasestorage.app",
  messagingSenderId: "61069732000",
  appId: "1:61069732000:web:27c93e69ddf98a42b601c5",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
