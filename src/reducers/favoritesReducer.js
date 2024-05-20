import { TOGGLE_FAVORITES, ADD_FAVORITE, REMOVE_FAVORITE } from "./../actions/favoritesActions"
import movies from '../data.js'

export const initialState = {
    movies: movies,
    appTitle: "IMDB Movie Database",
    favorites: {Film:[]} 
}

export const favoritesReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_FAVORITE:
            //todo : check replicate item.
            return {
                ...state,
                favorites: {
                    ...state.favorites,
                    Film: [...state.favorites.Film, action.payload]
                }
            }
        // case TOGGLE_FAVORITES:
        //     console.log('ADD_MOVIE reducer runs');
        //     return {
        //         ...state,
        //         movies: [...state.movies, action.payload]
         // }
        case REMOVE_FAVORITE:
            return  {
                ...state,
                favorites: {
                    ...state.favorites,
                    Film: state.favorites.Film.filter(item => (Number(action.payload) !== item.id))
                }
            }
        default:
            return state;
    }
}


