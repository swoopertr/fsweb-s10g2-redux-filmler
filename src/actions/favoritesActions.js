export const TOGGLE_FAVORITES = "TOGGLE_FAVORITES";
export const ADD_FAVORITE = "ADD_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";

export const toggleFavorites = () => {
  return ({ type: TOGGLE_FAVORITES });
}

export const addFavorite = (movie, user) => {
  return ({ type: ADD_FAVORITE, payload: {...movie, user: user} });
}

export const removeFavorite = (id, user) => {
  return ({ type: REMOVE_FAVORITE, payload: id, user: user });
}