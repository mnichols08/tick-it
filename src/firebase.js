import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyD3YqyGqa6Z5amJ_Al1pQYsD8HNEQ1qpek",
  authDomain: "tick-it-37b99.firebaseapp.com",
  databaseURL: "https://tick-it-37b99-default-rtdb.firebaseio.com",
  projectId: "tick-it-37b99",
  storageBucket: "tick-it-37b99.appspot.com",
  messagingSenderId: "716570222475",
  appId: "1:716570222475:web:f2c9d258c80c5ad895998e",
  measurementId: "G-64X5WEVMT8"
};
// const firebaseConfig = {
//   apiKey: "AIzaSyBe54uV9lOiDCuc3-gQP085Qy55_lEbRSM",
//   authDomain: "journey-to-code-4836d.firebaseapp.com",
//   projectId: "journey-to-code-4836d",
//   storageBucket: "journey-to-code-4836d.appspot.com",
//   messagingSenderId: "655347361607",
//   appId: "1:655347361607:web:840065d350c299ba6fce62",
//   measurementId: "G-S1CC0TPQCE"
// };

// Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export {db}