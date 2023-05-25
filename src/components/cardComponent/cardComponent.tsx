import { useEffect, useState } from 'react';
import api from '../../services/api';
import { PokemonCardContainer } from './cardComponentStyle';

type CardComponentProps = {
  cardPokemon: string;
  setCardPokemon: React.Dispatch<React.SetStateAction<string>>;
};

export const CardComponent = ({ cardPokemon, setCardPokemon }: CardComponentProps) => {
  const [pokeInfos, setPokeInfos] = useState<any>();

  useEffect(() => {
    const getSelectedPokemonInfos = async () => {
      const selectedPokemonInfos = await api.get(`/pokemon/${cardPokemon}`);
      setPokeInfos(selectedPokemonInfos.data);
    };

    getSelectedPokemonInfos();
  }, [cardPokemon]);

  return (
    <PokemonCardContainer>
      {pokeInfos ? (
        <div className="cardContainer">
          <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeInfos.id}.png`} alt="" />
          <div className="cardContainer__name">
            <span>Name:</span>
            <p>{pokeInfos.name}</p>
          </div>

          <div className="cardContainer__weight">
            <span>Weight:</span>
            <p>{pokeInfos.weight}</p>
          </div>

          <div className="cardContainer__height">
            <span>Height:</span>
            <p>{pokeInfos.height}</p>
          </div>

          <div className="cardContainer__xp">
            <span>Exp:</span>
            <p>{pokeInfos.base_experience}</p>
          </div>




        </div>
      ) : null}
    </PokemonCardContainer>
  );
};
