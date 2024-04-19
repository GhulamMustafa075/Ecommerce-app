import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyB8QCPHVSqFF5dfGU0ZYYR7EylQCzOnFhQ",
  authDomain: "product-auth-abfed.firebaseapp.com",
  projectId: "product-auth-abfed",
  storageBucket: "product-auth-abfed.appspot.com",
  messagingSenderId: "321830767201",
  appId: "1:321830767201:web:d4277cf5ad5aa4e572f820",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);
export { fireDB, auth };
