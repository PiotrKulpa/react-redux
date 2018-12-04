import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: 'Number of the Beast', duration: '6:66' },
    { title: 'Aces High', duration: '4:00' },
    { title: 'Powerslave', duration: '3:22' },
    { title: 'Run to the Hills', duration: '2:66' }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if(action.type === 'SELECTED_SONG') {
    return action.payload;
  }

  return selectedSong;
};

// Export all reducers with combineReducers
export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
