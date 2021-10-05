export const selectSong = function (song) {
  return {
    type: 'SELECTED_SONG',
    payload: song,
  };
};
