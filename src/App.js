import React, {useState} from 'react';
import Nav from './Components/Nav';
import Player from './Components/Player';
import MusicsLibrary from './Components/MusicsLibrary';
import './Styles/main.scss';
import Musicdata from './Data/Musicdata';

function App() {

  const [isLibraryOpen, setIsLibraryOpen] = useState(false);
  const [Musiclist, setMusiclist] = useState(Musicdata());
  const [selectedMusic, setSelectedMusic] = useState(Musiclist[0]);

  const handleClickOnLibrary = () => {
      setIsLibraryOpen(!isLibraryOpen);
  }

  return (
    <div className="music-app">
      <Nav isLibraryOpen={isLibraryOpen} setIsLibraryOpen={setIsLibraryOpen} handleClickOnLibrary={handleClickOnLibrary}/>
      <MusicsLibrary selectedMusic={selectedMusic} setSelectedMusic={setSelectedMusic} Musiclist={Musiclist} setMusiclist={setMusiclist} isLibraryOpen={isLibraryOpen} setIsLibraryOpen={setIsLibraryOpen} handleClickOnLibrary={handleClickOnLibrary} />
      <Player selectedMusic={selectedMusic} setSelectedMusic={setSelectedMusic} Musiclist={Musiclist} setMusiclist={setMusiclist} />
    </div>
  );
}

export default App;
