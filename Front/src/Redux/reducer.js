import {ADD_CHARACTER, ADD_FAVORITE, CLOSE_CARD, DELETE_FAVORITE, PONER_AL_INICIO, RESET, TO_SORT} from './action-types'

let initialstate = {
    
    allcharacters: [],
    characters:[],
    myfavorites:[]

};

let reducer = (state = initialstate, action ) => {
switch (action.type) {
   
    case ADD_FAVORITE:
    return {
    ...state,
    myfavorites: [action.payload, ...state.myfavorites],
    characters: state.characters.filter(e => e.id !== action.payload.id)
    }
    case DELETE_FAVORITE:
    return{
    ...state,
    myfavorites: state.myfavorites.filter(n => n.id !== action.payload )
    }
    case ADD_CHARACTER: 
    return{
    ...state,
    allcharacters:[action.payload, ...state.allcharacters],
    characters:[action.payload, ...state.characters]
    }
    case PONER_AL_INICIO:
    return {
    ...state,
    characters: [state.characters.find(e => e.id === Number(action.payload)), ...state.characters.filter(e => e.id !== Number(action.payload))]
    }
    case RESET:
        return{
            ...state,
            allcharacters: [],
            characters:[]
        }
    case TO_SORT:
        return{
            ...state,
            characters: [...state.characters].sort((a,b)=> a.id - b.id)
        }

    case CLOSE_CARD:
        return {
            ...state,
            allcharacters: state.allcharacters.filter(e => e.id !== action.payload),
            characters: state.characters.filter(e => e.id !== action.payload)
        }

    default:
    return {...state}

}
}

export default reducer;