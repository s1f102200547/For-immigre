import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";


// WARNING keyを.envで管理する必要がある
const firebaseConfig = {
  apiKey: "AIzaSyBkCIZoyUkSYFJzS93dHG4-DlZpHxC8Hk8",
  authDomain: "for-immigre.firebaseapp.com",
  projectId: "for-immigre",
  storageBucket: "for-immigre.appspot.com",
  messagingSenderId: "1032186639713",
  appId: "1:1032186639713:web:cc7a43b876f01f02814120",
  measurementId: "G-9NEZM2FP76",
  databaseURL: "https://for-immigre-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);