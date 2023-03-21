import {ADD_FAVORITE, DELETE_FAVORITE} from './action-types'

export const addfavorite = (character ) => {
    return {type: ADD_FAVORITE, payload: character}
}

export const deletefavorite = (id)  => {
    return {type: DELETE_FAVORITE, payload: id}
}