import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

///Edit Under This only

    var firebaseConfig = {
    apiKey: "AIzaSyCH-8O3md6MKiE-vWSVSt6HiScVRgaviHc",
    authDomain: "instagram-86afa.firebaseapp.com",
    databaseURL: "https://instagram-86afa-default-rtdb.firebaseio.com",
    projectId: "instagram-86afa",
    storageBucket: "instagram-86afa.firebasestorage.app",
    messagingSenderId: "575014280234",
    appId: "1:575014280234:android:587327854fc7f6a2323753"
  }; 
 
////Do Not Edit Below This

firebase.initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

console.log("Firebase Connected Successfully ✅");
