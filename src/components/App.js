import React from 'react';
import SongList from './SongList';
import SongDetails from './SongDetails';

function App() {
  return (
    <div className="row">
      <div className="col-sm-6">
        <SongList />
      </div>
      <div className="col-sm-6 d-flex align-items-center">
        <SongDetails />
      </div>
    </div>
  );
}

export default App;
