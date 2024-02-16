export const SAVE_SONGS = "SAVE_SONGS";
export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";
export const REMOVE_FROM_FAVORITES = "REMOVE_FROM_FAVORITES";
export const SELECT_SONG = "SELECT_SONG";
export const TURN_OFF_SPINNER = "TURN_OFF_SPINNER";
export const UPDATE_SEARCH_TERM = "UPDATE_SEARCH_TERM";

export const saveSongs = (songs) => ({
  type: SAVE_SONGS,
  payload: songs,
});

export const updateSearchTerm = (term) => ({
  type: UPDATE_SEARCH_TERM,
  payload: term,
});

export const addToFavorites = (songId) => ({
  type: ADD_TO_FAVORITES,
  payload: songId,
});

export const removeFromFavorites = (songId) => ({
  type: REMOVE_FROM_FAVORITES,
  payload: songId,
});

export const selectSong = (song) => ({
  type: SELECT_SONG,
  payload: song,
});

export const getSongs = (artist) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/search?q=${artist}`
      );
      if (response.ok) {
        const data = await response.json();
        dispatch(saveSongs(data.data));
      } else {
        console.error("Error fetching data");
      }
    } catch (error) {
      console.error("Error fetching data", error);
    } finally {
      dispatch({
        type: TURN_OFF_SPINNER,
      });
    }
  };
};
