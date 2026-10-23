import { initializeApp } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCTrUDdeCnr4AjHkgS6iVkiahEQFt4Zlaw",
  authDomain: "fb-learning-code.firebaseapp.com",
  databaseURL: "https://fb-learning-code-default-rtdb.firebaseio.com",
  projectId: "fb-learning-code",
  storageBucket: "fb-learning-code.firebasestorage.app",
  messagingSenderId: "726915404298",
  appId: "1:726915404298:web:bc8f3f12be66f2622e05f3",
  measurementId: "G-SHQE42MNMV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };