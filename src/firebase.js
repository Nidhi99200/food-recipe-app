import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBsyEbrh4Z-vfFgH3f7yH8jB5OVd_QcuUA",
    authDomain: "food-recipe-5ab46.firebaseapp.com",
    projectId: "food-recipe-5ab46",
    storageBucket: "food-recipe-5ab46.appspot.com",
    messagingSenderId: "305284217287",
    appId: "1:305284217287:web:0115c7ce102c92303e01e2",
    measurementId: "G-C6SC3ZYBRN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;