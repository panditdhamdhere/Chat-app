import { initializeApp } from "firebase/app";

import {getAuth} from "firebase/auth";
import {getStorage} from "firebase/storage"
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDF5zbqg_b3-ppoVx2H_yCs8GrmoKVBE2M",
  authDomain: "chat-app-26c01.firebaseapp.com",
  projectId: "chat-app-26c01",
  storageBucket: "chat-app-26c01.appspot.com",
  messagingSenderId: "587802506040",
  appId: "1:587802506040:web:39a6018fe32fcfcfef07cd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);