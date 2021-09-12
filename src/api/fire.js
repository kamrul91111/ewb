import firebase from "firebase/compat/app";
import "firebase/auth";

//firebase config
export const firebaseConfig = {
  apiKey: "AIzaSyAGpOrGVmfOM8OCRF3sNkkFyaI6SuUCa_U",
  authDomain: "ewb-water-data-app.firebaseapp.com",
  projectId: "ewb-water-data-app",
  storageBucket: "ewb-water-data-app.appspot.com",
  messagingSenderId: "1020740421466",
  appId: "1:1020740421466:web:7336a179a0a9d61d061563",
  measurementId: "G-YEY7FJ21P0",
};

//initialise app


if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
