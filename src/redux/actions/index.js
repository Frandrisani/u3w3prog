export const SAVE_SONGS = "SAVE_SONGS";
export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";
export const REMOVE_FROM_FAVORITES = "REMOVE_FROM_FAVORITES";
export const SELECT_SONG = "SELECT_SONG";

export const saveSongs = (songs) => ({
  type: SAVE_SONGS,
  payload: songs,
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
    }
  };
};
