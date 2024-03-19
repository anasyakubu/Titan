// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries
// import { getFirestore } from "firebase/firestore";

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyADKPtM79J-jbmT2X_lXF4jgAoSH18cd8U",
//   authDomain: "titan-ai-a4053.firebaseapp.com",
//   projectId: "titan-ai-a4053",
//   storageBucket: "titan-ai-a4053.appspot.com",
//   messagingSenderId: "510883599636",
//   appId: "1:510883599636:web:caed13d5817a4973889e01",
//   measurementId: "G-8538X5YKH9",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// export const db = getFirestore(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADKPtM79J-jbmT2X_lXF4jgAoSH18cd8U",
  authDomain: "titan-ai-a4053.firebaseapp.com",
  projectId: "titan-ai-a4053",
  storageBucket: "titan-ai-a4053.appspot.com",
  messagingSenderId: "510883599636",
  appId: "1:510883599636:web:caed13d5817a4973889e01",
  measurementId: "G-8538X5YKH9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const firestoreCollection = collection;
export const firestoreAddDoc = addDoc;
