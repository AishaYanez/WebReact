// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC150sukNWbhiPEYfwVOzJr5vdWP29sFyc",
  authDomain: "webreact-920d3.firebaseapp.com",
  databaseURL: "https://webreact-920d3-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "webreact-920d3",
  storageBucket: "webreact-920d3.appspot.com",
  messagingSenderId: "286783628733",
  appId: "1:286783628733:web:1e65bd785ea48c491bded4",
  measurementId: "G-N50P1YM776"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default database;