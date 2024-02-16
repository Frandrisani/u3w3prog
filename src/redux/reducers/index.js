import {
  SAVE_SONGS,
  ADD_TO_FAVORITES,
  REMOVE_FROM_FAVORITES,
  SELECT_SONG,
} from "../actions";

const initialState = {
  songs: [],
  favorites: [],
  selectedSong: [],
};

const songsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_SONGS:
      return {
        ...state,
        songs: action.payload,
      };

    case ADD_TO_FAVORITES:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };

    case REMOVE_FROM_FAVORITES:
      return {
        ...state,
        favorites: state.favorites.filter((id) => id !== action.payload),
      };
    case SELECT_SONG:
      return {
        ...state,
        selectedSong: action.payload,
      };

    default:
      return state;
  }
};

export default songsReducer;
