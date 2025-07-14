

import { initializeApp, getApp, getApps } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCinuZx1LXmJ3Q_qqQmM_l5AZQVHxeMZi4",
  authDomain: "ai-mock-interview-4f248.firebaseapp.com",
  projectId: "ai-mock-interview-4f248",
  storageBucket: "ai-mock-interview-4f248.firebasestorage.app",
  messagingSenderId: "615592839741",
  appId: "1:615592839741:web:c6b80cf6d4db94312ff854",
  measurementId: "G-YSR2QDYGY3"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();


export const auth = getAuth(app);
export const db = getFirestore (app);