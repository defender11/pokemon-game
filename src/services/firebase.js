import firebase from "firebase/app";
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyC25qt38bv1K9QDwECUrmlvJS36Y4Hxhrw",
  authDomain: "pokemon-game-e7997.firebaseapp.com",
  databaseURL: "https://pokemon-game-e7997-default-rtdb.firebaseio.com",
  projectId: "pokemon-game-e7997",
  storageBucket: "pokemon-game-e7997.appspot.com",
  messagingSenderId: "763801341919",
  appId: "1:763801341919:web:c1eb928e429393e289fe6a"
};

firebase.initializeApp(firebaseConfig);

export const fire = firebase;
export const database = fire.database();

export default database;