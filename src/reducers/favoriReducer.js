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
      console.log("eski favoriler", state.favorites)
      let newFavorites = [...state.favorites.filter(item => (Number(action.payload) !== item.id && item.user === action.user)), ...state.favorites.filter(item=> item.user !== action.user)]
      console.log("favoriler", newFavorites)
    return {
        ...state,
        favorites: newFavorites
    };

    default:
      return state;
  }
};

export { favoriReducer };
