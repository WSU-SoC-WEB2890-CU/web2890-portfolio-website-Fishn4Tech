// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js"
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdKFG0vFgJSmjWxwOiHCOCiylQXp1Ly3g",
  authDomain: "portfolio-site-fdf43.firebaseapp.com",
  projectId: "portfolio-site-fdf43",
  storageBucket: "portfolio-site-fdf43.firebasestorage.app",
  messagingSenderId: "299287705511",
  appId: "1:299287705511:web:7db1b8f0e62c23e4046882",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export { db }
