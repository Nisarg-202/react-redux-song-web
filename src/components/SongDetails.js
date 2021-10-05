import React from 'react';
import {connect} from 'react-redux';

function SongDetails(props) {
  return (
    props.selectedSong && (
      <div>
        Details For:
        <br />
        {props.selectedSong.title}
        <br />
        {props.selectedSong.duration}
      </div>
    )
  );
}

function mapStateToProps(state) {
  return {selectedSong: state.selectedSong};
}

export default connect(mapStateToProps)(SongDetails);
