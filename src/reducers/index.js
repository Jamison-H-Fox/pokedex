import { FETCH_POKEMON_START, RANDOM_POKEMON, RESET_POKEMON, FETCH_POKEMON_SUCCESS, FETCH_POKEMON_FAIL } from "../actions";


const initialState = {
    pokemon: {
        name: 'Catch Something!',
        type: 'normal',
        imgURL: 'https://www.pngall.com/wp-content/uploads/4/Pokemon-Pokeball-PNG-Clipart.png',
        id: '???',
        height: '???',
        weight: '???',
        abilities: [{ability: '???', id:0}, {ability: '???', id:1}]
    },
    errors: ''
};

function reducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_POKEMON_START:
            return {
                ...state,
                name: action.payload
            }
        case RANDOM_POKEMON:
            return {
                ...state,
                id: action.payload
            }
        case RESET_POKEMON:
            return {
                ...state,
                pokemon: {
                    name: initialState.pokemon.name,
                    type: initialState.pokemon.type,
                    imgURL: initialState.pokemon.imgURL,
                    id: initialState.pokemon.id,
                    height: initialState.pokemon.height,
                    weight: initialState.pokemon.weight,
                    abilities: initialState.pokemon.abilities
                },
                errors: ''
            }
        case FETCH_POKEMON_SUCCESS:
            return {
                ...state,
                pokemon: {
                    name: action.payload.name,
                    type: action.payload.types[0].type.name,
                    imgURL: action.payload.sprites.other["official-artwork"].front_default,
                    id: action.payload.id,
                    height: action.payload.height,
                    weight: action.payload.weight,
                    abilities: action.payload.abilities.map(ability => {
                        return {ability: ability.ability.name, id: ability.slot}
                    })
                },
                errors: ''
            }
        case FETCH_POKEMON_FAIL:
            return {
                ...state,
                errors: action.payload
            }
        default:
            return state;
    }
}

export default reducer;