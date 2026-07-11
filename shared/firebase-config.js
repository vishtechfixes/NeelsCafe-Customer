

















// ============================================================
//  shared/firebase-config.js
//  Kathi Roll Hub - Firebase Connection File
// ============================================================

const FIREBASE_CONFIG = {
  
  apiKey: "AIzaSyCIsYsizR3Cv_xXrHFyhW2dP0J_SwR91Pc",
  authDomain: "neels-cafe.firebaseapp.com",
  projectId: "neels-cafe",
  storageBucket: "neels-cafe.firebasestorage.app",
  messagingSenderId: "327739901498",
  appId: "1:327739901498:web:0dd6e83a8ea29c8a31d703",
  measurementId: "G-PN1DQG49P5"
};

// ── Firebase SDK Imports ──────────────────────────────────────
import { initializeApp } 
  from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";

import { 
  getFirestore, 
  collection, 
  doc, 
  getDoc, 
  getDocs, 
  setDoc, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  query, 
  where, 
  orderBy, 
  onSnapshot,
  increment,
  serverTimestamp 
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

import { getAuth } 
  from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// ── Initialize Firebase ────────────────────────────────────────
const app  = initializeApp(FIREBASE_CONFIG);
export const db   = getFirestore(app);
export const auth = getAuth(app);

// ── Re-export for Admin & Customer Logic ───────────────────────
export {
  collection, doc,
  getDoc, getDocs,
  setDoc, addDoc,
  updateDoc, deleteDoc,
  query, where, orderBy,
  onSnapshot,
  increment,
  serverTimestamp
};

// Tumhari Shop ki ID (Database entries ke liye)
export const SHOP_ID = "neels-cafe";