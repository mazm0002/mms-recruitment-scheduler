// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRoYWzAi_dDwdw-36zGaS4LI-7SMEUmNY",
  authDomain: "mms-recruitment-scheduler.firebaseapp.com",
  projectId: "mms-recruitment-scheduler",
  storageBucket: "mms-recruitment-scheduler.appspot.com",
  messagingSenderId: "705232371959",
  appId: "1:705232371959:web:a36ab3b8f2788fb66893f2",
  measurementId: "G-S1GD0WBCR1"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = firebase.firestore();

export default db;