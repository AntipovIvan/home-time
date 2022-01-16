import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const config = {
  apiKey: "AIzaSyCMpWjUiPW7KFV_yfKj88nbIkkP1wx-4PY",
  authDomain: "senmon-project.firebaseapp.com",
  projectId: "senmon-project",
  storageBucket: "senmon-project.appspot.com",
  messagingSenderId: "528559680367",
  appId: "1:528559680367:web:bdb4c6685bcdd3d862d69a",
  measurementId: "G-T7TY36DERS",
  databaseURL:
    "https://senmon-project-default-rtdb.asia-southeast1.firebasedatabase.app/",
};

initializeApp(config);

export const firestoreDb = getFirestore();
export const realtimeDb = getDatabase();
export const storage = getStorage();
