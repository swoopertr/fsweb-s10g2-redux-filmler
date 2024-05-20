import { combineReducers } from 'redux';

import { reducer } from './movieReducer';
import { favoriReducer } from './favoriReducer';

const reducers = combineReducers(
    {
        moviesReducer: reducer, 
        favoritesReducer: favoriReducer
    });

export default reducers;