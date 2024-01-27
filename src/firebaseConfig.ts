import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBqRo5YZYNkydnML3XmQexEDXtkL8TELKk",
  authDomain: "shopeazy-4d0cd.firebaseapp.com",
  projectId: "shopeazy-4d0cd",
  storageBucket: "shopeazy-4d0cd.appspot.com",
  messagingSenderId: "601916363700",
  appId: "1:601916363700:web:e49ea26a32772b25ba18e1",
  measurementId: "G-HNBMQPXJ86"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
