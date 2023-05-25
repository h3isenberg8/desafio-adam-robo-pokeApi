import { useContext, useState } from 'react';
import { PokemonContext } from '../../providers/pokemonContext';
import { DivOfPokemonsCards } from './bodyStyles';
import { CardComponent } from '../cardComponent/cardComponent';

export const BodyComponent = () => {
  const { selectedPokemons } = useContext(PokemonContext);
  const [cardPokemon, setCardPokemon] = useState<string>('')

  if (!selectedPokemons?.allPokemons) {
    return null;
  }

  return (
    <DivOfPokemonsCards>
      <ul>

        {selectedPokemons.allPokemons.map((e) => {
          const url: string[] = e.url.split('/')

          return (
            <li key={e.name} onClick={() => {
              
              setCardPokemon(e.name)
              }}>
              <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${url[6]}.png`} alt="" />
              <span>{e.name}</span>
            </li>
          );
        })}

      </ul>

      
      {cardPokemon ? <CardComponent cardPokemon={cardPokemon} setCardPokemon={setCardPokemon} /> : null}
      

    </DivOfPokemonsCards>
  );
};
