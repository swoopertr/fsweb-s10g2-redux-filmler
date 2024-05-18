import { ADD_MOVIE, DELETE_MOVIE } from '../actions/movieActions.js';
import movies from '../data.js'

const initialState = {
  movies: movies,
  appTitle: "IMDB Movie Database"
}

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case DELETE_MOVIE:
      console.log('DELETE_MOVIE reducer runs');
      return {
        ...state,
        movies: state.movies.filter(item => (Number(action.payload) !== item.id))
      }
      case ADD_MOVIE:
        console.log('ADD_MOVIE reducer runs');
        return {
          ...state,
          movies: [...state.movies, action.payload]
        }
    default:
      return state;
  }
}

export default reducer;