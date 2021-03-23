import {useState, useEffect} from 'react';
import s from "../Game/style.module.css";
import localPokemons from "../../pokemon_card_list";
import PokemonCard from "../../components/PokemonCard";
import Layout from "../../components/Layout";

import database from "../../services/firebase";

const GamePage = () => {
    const [pokemons, setPokemons] = useState({});

    const [cardsUpdated, setCardsUpdate] = useState(false);

    // get data from base
    useEffect(() => {
      database.ref('pokemons')
        .once('value', (snapshot) => {
          setPokemons(snapshot.val());
        });
    }, [cardsUpdated]);

    const onClickCardTurn = (id) => {
      setPokemons(prevState => {
        return Object
          .entries(prevState)
          .reduce((acc, item) => {
            const pokemon = {...item[1]};

            const prevCardState = pokemon.active;

            if (pokemon.id === id) {
              pokemon.active = !pokemon.active;
            }

            if (pokemon.active !== prevCardState) {
              database.ref('pokemons/' + item[0]).set(pokemon);
            }

            acc[item[0]] = pokemon;

            return acc;
          }, {});
      });
    };

    const onClickPokemonAdd = () => {
      setCardsUpdate(prevState => {
        const newKey = database.ref().child('pokemons').push().key;
        database.ref('pokemons/' + newKey).set(localPokemons[0]);
        return !prevState;
      });
    };

    return (
      <Layout
        title='The Game!'
        colorBg='rgba(220, 204, 129, 0.52)'
      >
        <div className={s.flex}>
          <button onClick={onClickPokemonAdd}>Add New Pokemon</button>
        </div>
        <div className={s.flex}>
          {
            Object.entries(pokemons).map(([key, {active, id, name, img, type, values}]) =>
              <PokemonCard
                key={key}

                isActive={active}
                id={id}
                name={name}
                img={img}
                type={type}
                values={values}

                onClickCardTurn={onClickCardTurn}
              />
            )
          }
        </div>
      </Layout>
    );
  }
;

export default GamePage;