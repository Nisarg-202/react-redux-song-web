import {combineReducers} from 'redux';

const songsReducer = function () {
  return [
    {title: 'Girls like you', duration: '4:50'},
    {title: 'Quafirana', duration: '3:30'},
    {title: 'Bebo', duration: '2:50'},
    {title: 'Ektara', duration: '4:21'},
  ];
};

const selectedSongReducer = function (selectedSong = null, action) {
  if (action.type === 'SELECTED_SONG') {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
