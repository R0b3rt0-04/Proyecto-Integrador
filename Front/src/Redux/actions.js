import { ADD_CHARACTER, ADD_FAVORITE, CLOSE_CARD, DELETE_FAVORITE, PONER_AL_INICIO, RESET, TO_SORT} from './action-types'

export const addcharacter = (id) => {
    return function(dispatch){
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((data) => dispatch({type: ADD_CHARACTER, payload: data}))
    }
}

export const poneralinicio = (id) => {
    return {type: PONER_AL_INICIO, payload: id}
}

export const reset = () => {
    return {type: RESET}
}

export const addfavorite = (character ) => {
    return {type: ADD_FAVORITE, payload: character}
}

export const deletefavorite = (id)  => {
    return {type: DELETE_FAVORITE, payload: id}
}

export const tosort = () => {
    return {type: TO_SORT}
}

export const closecard = (id) => {
    return {type: CLOSE_CARD, payload: id}
}