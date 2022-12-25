import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// const firebaseConfig = {
//   apiKey: "AIzaSyBKDom395i-KkPese98aicIpA6zfsUiSgo",
//   authDomain: "react-task-tracker-d0559.firebaseapp.com",
//   projectId: "react-task-tracker-d0559",
//   storageBucket: "react-task-tracker-d0559.appspot.com",
//   messagingSenderId: "1041810368735",
//   appId: "1:1041810368735:web:d73853e30315aa3c56a16a",
//   measurementId: "G-JY0196WDSC"
// };

//exceeded queries - need to start new project
const firebaseConfig = {
    apiKey: "AIzaSyD_P7V5hcr-qQ_qu7BJlPQITQ5ATc_f9mI",
    authDomain: "reacttasktracker2.firebaseapp.com",
    projectId: "reacttasktracker2",
    storageBucket: "reacttasktracker2.appspot.com",
    messagingSenderId: "54058129813",
    appId: "1:54058129813:web:48c149f4dd0bf6377ebe9c",
    measurementId: "G-QVEJDRT5P0"
  };


const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
