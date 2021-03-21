import {useState} from 'react';
import s from "../Game/style.module.css";
import POKEMONS from "../../pokemon_card_list";
import PokemonCard from "../../components/PokemonCard";
import Layout from "../../components/Layout";

const GamePage = () => {
    const [pokemons, setPokemons] = useState(() => POKEMONS.map(el => ({...el, active: false})))

    const onClickBack = (id) => {
      setPokemons(pok => {
        return pok.map(item => {
          if (id === item.id) {
            return {...item, active: !item.active};
          }

          return {...item};
        })
      })
    }

    return (
      <Layout
        title='The Game!'
        colorBg='rgba(220, 204, 129, 0.52)'
      >
        <div className={s.flex}>
          {
            pokemons.map(item =>
              <PokemonCard
                key={item.id}

                isActive={item.active}
                id={item.id}
                name={item.name}
                img={item.img}
                type={item.type}
                values={item.values}

                onClickBack={onClickBack}
              />
            )
          }
        </div>
      </Layout>
    );
  }
;

export default GamePage;