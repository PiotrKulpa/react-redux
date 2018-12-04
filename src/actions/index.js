// Create an action that return an object
export const selectSong = song => {
  return {
    type: 'SELECTED_SONG', //this is required
    payload: song
  };
};
