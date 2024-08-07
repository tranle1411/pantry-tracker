import { initializeApp } from "firebase/app";
import { getFirestore  } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDmRARiqqy7duzGdsUy_iuseF0q5Og4n5U",
  authDomain: "pantry-tracker-5fc63.firebaseapp.com",
  projectId: "pantry-tracker-5fc63",
  storageBucket: "pantry-tracker-5fc63.appspot.com",
  messagingSenderId: "831678305499",
  appId: "1:831678305499:web:ff3a5b0a73883376b9a8fe"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export { firestore };