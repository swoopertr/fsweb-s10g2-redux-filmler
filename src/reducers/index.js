import { combineReducers } from 'redux';
import {initialState, favoritesReducer} from "./favoritesReducer"

import movieReducer from './movieReducer';


const combinedReducers = combineReducers({
    movie: movieReducer,
    favorites: favoritesReducer
});


export default combinedReducers;