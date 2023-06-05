import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider,GithubAuthProvider, FacebookAuthProvider } from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import { getStorage } from "firebase/storage";
import "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyCeqAfgxg0pZxcxSWiRDeTDj1mb9NhZZBc",
  authDomain: "quiz-b3661.firebaseapp.com",
  projectId: "quiz-b3661",
  storageBucket: "quiz-b3661.appspot.com",
  messagingSenderId: "437726592566",
  appId: "1:437726592566:web:587a7db560f9602b27a297",
  measurementId: "G-JZRRNH0CSG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const GitHub_provider = new GithubAuthProvider();
export const facebook_provider = new FacebookAuthProvider();
export const db =getFirestore(app);
export const storage = getStorage(app);