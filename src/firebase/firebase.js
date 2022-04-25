
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCf_N-m2K4J6utC-SZUhr0UizvDJ0OnpzE",
  authDomain: "sun-store-7dcc3.firebaseapp.com",
  projectId: "sun-store-7dcc3",
  storageBucket: "sun-store-7dcc3.appspot.com",
  messagingSenderId: "754464684884",
  appId: "1:754464684884:web:63c33b46128dbc8cf726c1"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore (app);