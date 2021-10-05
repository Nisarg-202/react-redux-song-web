import {selectSong} from '../actions';

test('check selected song', () => {
  const sum = 1 + 4;
  expect(selectSong('Nisarg')).toBe({
    type: 'SELECTED_SONG',
    payload: 'Nisarg',
  });
});
