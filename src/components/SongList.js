import React from 'react';
import {connect} from 'react-redux';
import {selectSong} from '../actions';

function SongList(props) {
  function songList() {
    return props.songs.map(function (song) {
      return (
        <div className="row my-3 mx-2" key={song.title}>
          <div className="col-sm-6">
            <h6>{song.title}</h6>
          </div>
          <div className="col-sm-6">
            <button
              className="btn btn-primary btn-sm"
              onClick={function () {
                props.selectSong(song);
              }}
            >
              Select
            </button>
          </div>
        </div>
      );
    });
  }
  return <div>{songList()}</div>;
}

function mapStateToProps(state) {
  return {songs: state.songs};
}

export default connect(mapStateToProps, {selectSong})(SongList);
