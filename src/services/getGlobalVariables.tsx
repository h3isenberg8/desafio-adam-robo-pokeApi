import { IAllPokemonHabitatResponse, IAllPokemonsByGender, IAllPokemonsByGrowthRate, IAllPokemonsResponse } from "../interfaces/pokemonInterfaces";
import api from "./api";

export const filteredResults = async () => {
  try {
    const allPokemonsResponse = await api.get('/pokemon/?limit=999999&offset=0');
    const allPokemons: IAllPokemonsResponse = allPokemonsResponse.data.results;
    
    const allPokemonsByGenderResponseMale = await api.get('/gender/male');
    const allPokemonsByGenderResponseFemale = await api.get('/gender/female');
    const allPokemonsByGenderResponseGenderless = await api.get('/gender/genderless');
    const allPokemonsByGender: IAllPokemonsByGender = {
      male: allPokemonsByGenderResponseMale.data.pokemon_species_details,
      female: allPokemonsByGenderResponseFemale.data.pokemon_species_details,
      genderless: allPokemonsByGenderResponseGenderless.data.pokemon_species_details
    }

    allPokemonsByGender.female = allPokemonsByGender.female.map(({ pokemon_species }) => pokemon_species);
    allPokemonsByGender.male = allPokemonsByGender.male.map(({ pokemon_species }) => pokemon_species);
    allPokemonsByGender.genderless = allPokemonsByGender.genderless.map(({ pokemon_species }) => pokemon_species);
    
    
    const allPokemonsByGrowthRateResponseFast = await api.get('/growth-rate/fast');
    const allPokemonsByGrowthRateResponseMedium = await api.get('/growth-rate/medium');
    const allPokemonsByGrowthRateResponseSlow = await api.get('/growth-rate/slow');
    const allPokemonsByGrowthRateResponseMediumSlow = await api.get('/growth-rate/medium-slow');
    const allPokemonsByGrowthRateResponseSlowThenVeryFast = await api.get('/growth-rate/slow-then-very-fast');
    const allPokemonsByGrowthRateResponseFastThenVerySlow = await api.get('/growth-rate/fast-then-very-slow');
    const allPokemonsByGrowthRate: IAllPokemonsByGrowthRate = {
      fast: allPokemonsByGrowthRateResponseFast.data.pokemon_species,
      medium: allPokemonsByGrowthRateResponseMedium.data.pokemon_species,
      slow: allPokemonsByGrowthRateResponseSlow.data.pokemon_species,
      mediumSlow: allPokemonsByGrowthRateResponseMediumSlow.data.pokemon_species,
      slowThenVeryFast: allPokemonsByGrowthRateResponseSlowThenVeryFast.data.pokemon_species,
      fastThenVerySlow: allPokemonsByGrowthRateResponseFastThenVerySlow.data.pokemon_species}

    const allPokemonsByHabitatResponseCave = await api.get('/pokemon-habitat/cave');
    const allPokemonsByHabitatResponseForest = await api.get('/pokemon-habitat/forest');
    const allPokemonsByHabitatResponseGrassLand = await api.get('/pokemon-habitat/grassland');
    const allPokemonsByHabitatResponseMountain = await api.get('/pokemon-habitat/mountain');
    const allPokemonsByHabitatResponseRare = await api.get('/pokemon-habitat/rare');
    const allPokemonsByHabitatResponseRoughTerrain = await api.get('/pokemon-habitat/rough-terrain');
    const allPokemonsByHabitatResponseSea = await api.get('/pokemon-habitat/sea');
    const allPokemonsByHabitatResponseUrban = await api.get('/pokemon-habitat/urban');
    const allPokemonsByHabitatResponseWatersEdge = await api.get('/pokemon-habitat/waters-edge');
    const allPokemonsByHabitat: IAllPokemonHabitatResponse = {
      cave: allPokemonsByHabitatResponseCave.data.pokemon_species,
      forest: allPokemonsByHabitatResponseForest.data.pokemon_species,
      grassland: allPokemonsByHabitatResponseGrassLand.data.pokemon_species,
      mountain: allPokemonsByHabitatResponseMountain.data.pokemon_species,
      rare: allPokemonsByHabitatResponseRare.data.pokemon_species,
      roughTerrain: allPokemonsByHabitatResponseRoughTerrain.data.pokemon_species,
      sea: allPokemonsByHabitatResponseSea.data.pokemon_species,
      urban: allPokemonsByHabitatResponseUrban.data.pokemon_species,
      watersEdge: allPokemonsByHabitatResponseWatersEdge.data.pokemon_species,
    };
    

    return {
      allPokemons,
      allPokemonsByGender,
      allPokemonsByGrowthRate,
      allPokemonsByHabitat,
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};
