import React, { createContext, useState, useEffect } from "react";
import { filteredResults } from "../services/getGlobalVariables";
import { IAllData, IChosenUser, IPokemonResponse } from "../interfaces/pokemonInterfaces";

interface IPokemonContext {
  storedPokemon: IAllData | undefined,
  setStoredPokemon: React.Dispatch<React.SetStateAction<IAllData | undefined>>,
  selectedPokemons: IAllData | undefined,
  setSelectedPokemons: React.Dispatch<React.SetStateAction<IAllData | undefined>>,
  selectedOptions:IChosenUser,
  setSelectedOptions: React.Dispatch<React.SetStateAction<IChosenUser>>,
  manageSelectedOptions: (gender: string | null, habitat: string | null, growthRate: string | null) => void
}

interface IPokemonContextProps {
  children: React.ReactNode
}

export const PokemonContext = createContext({} as IPokemonContext);

export const PokemonProvider = ({ children }: IPokemonContextProps) => {
  const [storedPokemon, setStoredPokemon] = useState<IAllData>();
  const [selectedPokemons, setSelectedPokemons] = useState<IAllData>();
  const [selectedOptions, setSelectedOptions] = useState<IChosenUser>({gender: 'all', growthRate: 'all', habits: 'all'})

  useEffect(() => {
    const fetchData = async () => {
      const results: IAllData = await filteredResults();
      setStoredPokemon(results)
      setSelectedPokemons(results)
    };
    fetchData();
  }, []);


  const manageSelectedOptions = (gender: string | null, habitat: string | null, growthRate: string | null) => {
    let pokemonsChosenByGender: IPokemonResponse[] = [];
    let pokemonsChosenByHabitat: IPokemonResponse[] = [];
    let pokemonsChosenByGrowthRate: IPokemonResponse[] = [];

    

    if(gender == null) {
      gender = selectedOptions.gender
    }

    if(habitat == null) {
      habitat = selectedOptions.habits
    }

    if(growthRate == null) {
      growthRate = selectedOptions.growthRate
    }

    if (gender === 'all') {
      pokemonsChosenByGender = [
        ...storedPokemon!.allPokemonsByGender.female,
        ...storedPokemon!.allPokemonsByGender.male,
        ...storedPokemon!.allPokemonsByGender.genderless,
      ];
    } else if(gender == 'male') {
      pokemonsChosenByGender = [...storedPokemon!.allPokemonsByGender.male]
    } else if(gender == 'female') {

      pokemonsChosenByGender = [...storedPokemon!.allPokemonsByGender.female]

    } else {
      pokemonsChosenByGender = [...storedPokemon!.allPokemonsByGender.genderless]
    }
    

    if(habitat == 'all') {
      pokemonsChosenByHabitat = [
        ...storedPokemon!.allPokemonsByHabitat.cave,
        ...storedPokemon!.allPokemonsByHabitat.forest,
        ...storedPokemon!.allPokemonsByHabitat.grassland,
        ...storedPokemon!.allPokemonsByHabitat.mountain,
        ...storedPokemon!.allPokemonsByHabitat.rare,
        ...storedPokemon!.allPokemonsByHabitat.roughTerrain,
        ...storedPokemon!.allPokemonsByHabitat.sea,
        ...storedPokemon!.allPokemonsByHabitat.urban,
        ...storedPokemon!.allPokemonsByHabitat.watersEdge
      ]
    } else if(habitat == 'forest') {
      pokemonsChosenByHabitat = [
        ...storedPokemon!.allPokemonsByHabitat.forest
      ]
    } else if(habitat == 'cave') {
      pokemonsChosenByHabitat = [
        ...storedPokemon!.allPokemonsByHabitat.cave
      ]
    } else if(habitat == 'grassland') {
      pokemonsChosenByHabitat = [
        ...storedPokemon!.allPokemonsByHabitat.grassland
      ]
    } else if(habitat == 'mountain') {
      pokemonsChosenByHabitat = [
        ...storedPokemon!.allPokemonsByHabitat.mountain
      ]
    } else if(habitat == 'rare') {
      pokemonsChosenByHabitat = [
        ...storedPokemon!.allPokemonsByHabitat.rare
      ]
    } else if(habitat == 'roughTerrain') {
      pokemonsChosenByHabitat = [
        ...storedPokemon!.allPokemonsByHabitat.roughTerrain
      ]
    } else if(habitat == 'sea') {
      pokemonsChosenByHabitat = [
        ...storedPokemon!.allPokemonsByHabitat.sea
      ]
    } else if(habitat == 'urban') {
      pokemonsChosenByHabitat = [
        ...storedPokemon!.allPokemonsByHabitat.urban
      ]
    } else {
      pokemonsChosenByHabitat = [
        ...storedPokemon!.allPokemonsByHabitat.watersEdge

      ]
    }

    if(growthRate == 'all') {
      pokemonsChosenByGrowthRate = [
        ...storedPokemon!.allPokemonsByGrowthRate.fast,
        ...storedPokemon!.allPokemonsByGrowthRate.fastThenVerySlow,
        ...storedPokemon!.allPokemonsByGrowthRate.medium,
        ...storedPokemon!.allPokemonsByGrowthRate.mediumSlow,
        ...storedPokemon!.allPokemonsByGrowthRate.slow,
        ...storedPokemon!.allPokemonsByGrowthRate.slowThenVeryFast

      ]
    } else if(growthRate == 'fast') {
      pokemonsChosenByGrowthRate = [
        ...storedPokemon!.allPokemonsByGrowthRate.fast
      ]
    } else if(growthRate == 'fastThenVerySlow') {
      pokemonsChosenByGrowthRate = [
        ...storedPokemon!.allPokemonsByGrowthRate.fastThenVerySlow
      ]
    } else if(growthRate == 'medium') {
      pokemonsChosenByGrowthRate = [
        ...storedPokemon!.allPokemonsByGrowthRate.medium
      ]
    } else if(growthRate == 'mediumSlow') {
      pokemonsChosenByGrowthRate = [
        ...storedPokemon!.allPokemonsByGrowthRate.mediumSlow
      ]
    } else if(growthRate == 'slow') {
      pokemonsChosenByGrowthRate = [
        ...storedPokemon!.allPokemonsByGrowthRate.slow
      ]
    } else {

      pokemonsChosenByGrowthRate = [
        ...storedPokemon!.allPokemonsByGrowthRate.slowThenVeryFast
      ]

    }   

    selectPokemons(pokemonsChosenByGender, pokemonsChosenByHabitat, pokemonsChosenByGrowthRate)
  }

  const selectPokemons = (
    pokemonsChosenByGender: IPokemonResponse[],
    pokemonsChosenByHabitat: IPokemonResponse[],
    pokemonsChosenByGrowthRate: IPokemonResponse[]
    ) => {
    const allChosenPokes: IPokemonResponse[] | undefined = storedPokemon?.allPokemons.filter(e => {
      let counter = 0;
      let chosenOnes = [];
  
      const checkIfGenderExists = pokemonsChosenByGender.find(Element => e.name === Element.name);
  
      if (checkIfGenderExists) {
        counter++;
      }
  
      const checkIfHabitatExists = pokemonsChosenByHabitat.find(Element => e.name === Element.name);
  
      if (checkIfHabitatExists) {
        counter++;
      }
  
      const checkIfGrowthRateExists = pokemonsChosenByGrowthRate.find(Element => e.name === Element.name);
  
      if (checkIfGrowthRateExists) {
        counter++;
      }
  
      if (counter === 3) {
        return e;
      }
    });
    
    const test = {allPokemons: allChosenPokes}

    setSelectedPokemons(test);
  };



  return (
    <PokemonContext.Provider value={{storedPokemon, setStoredPokemon, selectedPokemons, setSelectedPokemons, selectedOptions, setSelectedOptions, manageSelectedOptions}}>
      {children}
    </PokemonContext.Provider>
  );
};
