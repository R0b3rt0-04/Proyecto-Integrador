import {ADD_FAVORITE, DELETE_FAVORITE} from './action-types'

let initialstate = {myfavorites:[]};

let reducer = (state = initialstate, action ) => {
switch (action.type) {
   
    case ADD_FAVORITE:
        return {
            ...state,
            myfavorites: [action.payload, ...state.myfavorites]
        }
    break;

    case DELETE_FAVORITE:
        return{
            ...state,
            myfavorites: state.myfavorites.filter(n => n.id !== action.payload )
        }
    break;

    default:
        return {...state}
    break;
}
}

export default reducer;