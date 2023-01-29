import axios from "axios";

export const FETCH_POKEMON_START = 'FETCH_POKEMON_START';
export const FETCH_POKEMON_SUCCESS = 'FETCH_POKEMON_SUCCESS';
export const FETCH_POKEMON_FAIL = 'FETCH_POKEMON_FAIL';

export const RANDOM_POKEMON = 'RANDOM_POKEMON';
export const RESET_POKEMON = 'RESET_POKEMON';

export const searchPokemon = (pokeName) => dispatch => {
    dispatch({ type: FETCH_POKEMON_START });
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
        .then(res => {
            dispatch({ type: FETCH_POKEMON_SUCCESS, payload: res.data })
        })
        .catch(err => {
            dispatch({ type: FETCH_POKEMON_FAIL, payload: `Uh-oh, that pokémon doesn't exist. Check your spelling` })
        })
}


export const randomPokemon = () => dispatch => {
    const highest = 905;
    const lowest = 1;
    let randomID = Math.floor(Math.random() * (highest - lowest) + lowest);
    
    console.log(`random number: ${randomID}`)
    dispatch({ type: FETCH_POKEMON_START });
    axios.get(`https://pokeapi.co/api/v2/pokemon/${randomID}`)
        .then(res => {
            dispatch({ type: FETCH_POKEMON_SUCCESS, payload: res.data })
        })
        .catch(err => {
            dispatch({ type: FETCH_POKEMON_FAIL, payload: `Uh-oh, that pokémon doesn't exist. Check your spelling` })
        })
}

export function resetPokemon() {
    return{
        type: RESET_POKEMON
    }
}