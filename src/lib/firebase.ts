import { initializeApp, getApps, getApp, type FirebaseOptions } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig: FirebaseOptions = {
  apiKey: "AIzaSyCV3Tz_b2h6e9m5g2Q7fP9v5q9l3c9j7M",
  authDomain: "ehsan-study-website.firebaseapp.com",
  projectId: "ehsan-study-website",
  storageBucket: "ehsan-study-website.appspot.com",
  messagingSenderId: "987654321012",
  appId: "1:987654321012:web:a1b2c3d4e5f6a7b8c9d0e1"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);

export { app, auth };
