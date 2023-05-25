export interface IPokemonResponse {
    name: string;
    url: string;
    pokemon_species?: any;
  }

export type IAllPokemonsResponse = Array<IPokemonResponse>;
  
export interface IAllPokemonsByGender {
    male: IPokemonResponse[];
    female: IPokemonResponse[];
    genderless: IPokemonResponse[];
}

export interface IAllPokemonsByGrowthRate {
    fast: IPokemonResponse[],
    fastThenVerySlow: IPokemonResponse[],
    medium: IPokemonResponse[],
    mediumSlow: IPokemonResponse[],
    slow: IPokemonResponse[],
    slowThenVeryFast: IPokemonResponse[]
}

export interface IAllPokemonHabitatResponse {
    cave: IPokemonResponse[];
    forest: IPokemonResponse[];
    grassland: IPokemonResponse[];
    mountain: IPokemonResponse[];
    rare: IPokemonResponse[];
    roughTerrain: IPokemonResponse[];
    sea: IPokemonResponse[];
    urban: IPokemonResponse[];
    watersEdge: IPokemonResponse[];
}

export interface IAllData {
    allPokemons: IAllPokemonsResponse;
    allPokemonsByGender: IAllPokemonsByGender;
    allPokemonsByGrowthRate: IAllPokemonsByGrowthRate;
    allPokemonsByHabitat: IAllPokemonHabitatResponse;
}

export interface IChosenUser {
    gender: string,
    growthRate: string,
    habits: string,
}