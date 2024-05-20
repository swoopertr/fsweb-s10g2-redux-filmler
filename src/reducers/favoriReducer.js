import { ADD_FAVORITE, TOGGLE_FAVORITES, REMOVE_FAVORITE } from "../actions/favoritesActions";

const initialState = {
  favorites: [],
  displayFavorites: false,
};

const favoriReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case TOGGLE_FAVORITES:
      return {
        ...state,
        displayFavorites: state.displayFavorites ? false : true
      };
    case REMOVE_FAVORITE:
    return {
        ...state,
        favorites: state.favorites.filter(item => (Number(action.payload) !== item.id))
    };

    default:
      return state;
  }
};

export { favoriReducer };
