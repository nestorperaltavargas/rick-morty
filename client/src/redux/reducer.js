import { ADD_FAV, FILTER, REMOVE_FAV, ORDER } from "./action-types";

const initialState = {
    myFavorites:[],
    allCharactersFav: []
};

const reducer = (state = initialState, {type, payload}) => {
    switch(type){
        case ADD_FAV:
            return { ...state, myFavorites: payload, allCharacters: payload };
        
        case REMOVE_FAV:
            return { ...state, myFavorites: payload };

        case FILTER:
            const filtered = state.allCharactersFav.filter((character) => character.gender === payload);
            return {
                ...state,
                myFavorites: filtered
            }

        case ORDER:
            const allCharactersCopy = [...state.allCharactersFav];
            return{
                ...state,
                myFavorites:
                payload === "A" ? allCharactersCopy.sort((a, b) => a.id - b.id) : allCharactersCopy.sort((a, b) => b.id - a.id)
            }

        default:
            return {
                ...state
            }
    }
}

export default reducer;