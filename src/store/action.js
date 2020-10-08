export const CLICK = 'CLICK'
export const FETCH_POKEMON_SUCCESS = 'FETCH_POKEMON_SUCCESS'

// parenthses permet de return en implicit
export const fetchPokemonSuccess = (pokemons) => ({
    type: FETCH_POKEMON_SUCCESS,
    pokemons: pokemons,
  });