
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAOBrV6Xn3ggo8WUITKqJL11hEldzOAiH4",
  authDomain: "shoezweb.firebaseapp.com",
  projectId: "shoezweb",
  storageBucket: "shoezweb.appspot.com",
  messagingSenderId: "82619724437",
  appId: "1:82619724437:web:364a2a283d60d6e9f4219c",
  measurementId: "G-LRDQ67CFG6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
const analytics = getAnalytics(app);

// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// const firebaseConfig = {
//   apiKey: "AIzaSyCXXr6oeNTA8F21NgI3LTRNkxVgTInHnI0",
//   authDomain: "fir-shoez.firebaseapp.com",
//   projectId: "fir-shoez",
//   storageBucket: "fir-shoez.appspot.com",
//   messagingSenderId: "320307549313",
//   appId: "1:320307549313:web:5f57095f69904fe7b36980"
// };

// // Initialize Firebase
// export const app = initializeApp(firebaseConfig);
// export const database = getFirestore(app);