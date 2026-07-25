import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
} from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUGIFDdLw01I-WR0YxH-ABgp1ByJnsw3Y",
  authDomain: "mindguard-ai-184ec.firebaseapp.com",
  projectId: "mindguard-ai-184ec",
  storageBucket: "mindguard-ai-184ec.firebasestorage.app",
  messagingSenderId: "834640225315",
  appId: "1:834640225315:web:fa3f9faa2b66824b82fd96",
  measurementId: "G-ZC232HJG3Z"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const googleProvider = new GoogleAuthProvider();

export default app;