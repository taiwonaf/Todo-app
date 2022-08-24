import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBpJ5M5mnTH6d1TmhWZTNscf5COVrV3MmY",
    authDomain: "new-todo-app-c82fb.firebaseapp.com",
    projectId: "new-todo-app-c82fb",
    storageBucket: "new-todo-app-c82fb.appspot.com",
    messagingSenderId: "615094656145",
    appId: "1:615094656145:web:bf8aee27ad668149577330"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

export { db };