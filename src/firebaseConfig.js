import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBKDom395i-KkPese98aicIpA6zfsUiSgo",
  authDomain: "react-task-tracker-d0559.firebaseapp.com",
  projectId: "react-task-tracker-d0559",
  storageBucket: "react-task-tracker-d0559.appspot.com",
  messagingSenderId: "1041810368735",
  appId: "1:1041810368735:web:d73853e30315aa3c56a16a",
  measurementId: "G-JY0196WDSC"
};


export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
