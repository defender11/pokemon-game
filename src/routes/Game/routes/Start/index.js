import {useState, useEffect, useContext} from 'react';
import {useHistory} from 'react-router-dom';
import s from "./style.module.css";

import PokemonCard from "../../../../components/PokemonCard";
import Layout from "../../../../components/Layout";

import {FirebaseContext} from "../../../../services/firebaseContext";
import {PokemonContext} from "../../../../services/PokemonContext";

const StartPage = () => {
    const firebase = useContext(FirebaseContext);
    const pokemonContext = useContext(PokemonContext);
    const history = useHistory();
    const [pokemons, setPokemons] = useState({});

    useEffect(() => {
      firebase.getPokemonSocket((pokemons) => {
        setPokemons(pokemons);
      });

      return () => firebase.offPokemonSocket();
    }, []);

    const onClickCardTurn = (key) => {
      const pokemon = {...pokemons[key]};
      pokemonContext.onSelectedPokemons(key, pokemon);

      setPokemons(prevState => ({
        ...prevState,
        [key]: {
          ...prevState[key],
          selected: !prevState[key].selected
        }
      }))
    };

    const handlerStartClickGame = () => {
      history.push('/game/board');
    }

    return (
      <Layout
        title='The Game!'
        colorBg='rgba(220, 204, 129, 0.52)'
      >
        <div className={s.flex}>
          <button
            onClick={handlerStartClickGame}
            disabled={Object.keys(pokemonContext.pokemons).length < 5}
          >Start Game</button>
        </div>
        <div className={s.flex}>
          {
            Object.entries(pokemons).map(([key, {active, id, name, img, type, values, selected}]) =>
              <PokemonCard
                className={s.card}
                key={key}

                isActive
                isSelected={selected}
                id={id}
                name={name}
                img={img}
                type={type}
                values={values}

                onClickCardTurn={() => {
                  if (Object.keys(pokemonContext.pokemons).length < 5 || selected) {
                    onClickCardTurn(key);
                  }
                }}
              />
            )
          }
        </div>
      </Layout>
    );
  }
;

export default StartPage;