import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDlGyTMFikBWPCRxJxHKoqD7MHkQLOE2_E",
  authDomain: "padeleros-7e417.firebaseapp.com",
  projectId: "padeleros-7e417",
  storageBucket: "padeleros-7e417.firebasestorage.app",
  messagingSenderId: "269080940709",
  appId: "1:269080940709:web:d17e64c7f02bd470567d4c"
};

const app = initializeApp(firebaseConfig);

export const db =getFirestore(app)