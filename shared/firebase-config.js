// shared/firebase-config.js -- Neel's Cafe Customer
import { initializeApp, getApps, getApp }
  from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getFirestore, collection, doc,
  getDoc, getDocs, setDoc, addDoc,
  updateDoc, deleteDoc,
  query, where, orderBy,
  onSnapshot, increment, serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import {
  getAuth, setPersistence, browserLocalPersistence,
  RecaptchaVerifier, signInWithPhoneNumber
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const FIREBASE_CONFIG = {
  apiKey:            "AIzaSyCIsYsizR3Cv_xXrHFyhW2dP0J_SwR91Pc",
  authDomain:        "neels-cafe.firebaseapp.com",
  projectId:         "neels-cafe",
  storageBucket:     "neels-cafe.firebasestorage.app",
  messagingSenderId: "327739901498",
  appId:             "1:327739901498:web:0dd6e83a8ea29c8a31d703"
};

const app = getApps().length ? getApp() : initializeApp(FIREBASE_CONFIG);
export const db   = getFirestore(app);
export const auth = getAuth(app);

setPersistence(auth, browserLocalPersistence)
  .catch(function(e) { console.warn("Persistence:", e); });

export {
  collection, doc,
  getDoc, getDocs,
  setDoc, addDoc,
  updateDoc, deleteDoc,
  query, where, orderBy,
  onSnapshot, increment, serverTimestamp
};
export { RecaptchaVerifier, signInWithPhoneNumber };
export const SHOP_ID = "neels-cafe";











