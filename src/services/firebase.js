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

class Firebase {
  constructor() {
    this.fire = firebase;
    this.database = this.fire.database();
  }

  getPokemonSocket = (cb) => {
    this.database.ref('pokemons').on('value', (snapshot) => {
      cb(snapshot.val());
    });
  }

  offPokemonSocket = () => {
    this.database.ref('pokemons').off();
  }

  getPokemonsOnce = async () => {
    return await this.database.ref('pokemons').once('value').then(snapshot => snapshot.val());
  }

  postPokemon = (key, pokemon) => {
    this.database.ref(`pokemons/${key}`).set(pokemon);
  }

  addPokemon = (data, cb) => {
    const newKey = this.database.ref().child('pokemons').push().key;
    this.database.ref('pokemons/' + newKey).set(data).then(() => cb());
  }
}

export default Firebase;