import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyALBaQbL-in4hcwHxF62LP2ghsAW74Zs0g",
  authDomain: "hello-people-5a1d3.firebaseapp.com",
  projectId: "hello-people-5a1d3",
  storageBucket: "hello-people-5a1d3.appspot.com",
  messagingSenderId: "915367301366",
  appId: "1:915367301366:web:9abaa7b29390be2c771cd7",
};

// Initialize Firebase
const firebase_app = initializeApp(firebaseConfig);

export default firebase_app;
