import React, {useState, useRef} from 'react';
import Nav from './Components/Nav';
import Player from './Components/Player';
import MusicsLibrary from './Components/MusicsLibrary';
import './Styles/main.scss';
import Musicdata from './Data/Musicdata';

function App() {

  const [isPlaying, setIsPlaying] = useState(false);
  const [isLibraryOpen, setIsLibraryOpen] = useState(false);
  const [Musiclist, setMusiclist] = useState(Musicdata());
  const [selectedMusic, setSelectedMusic] = useState(Musiclist[0]);
  const audioRef = useRef(null);
  const [audioTime, setAudioTime] = useState({currentTime: 0, duration : null});

  const handleClickOnLibrary = () => {
      setIsLibraryOpen(!isLibraryOpen);
  }

  const handleTimeReccord = () => {
    const currentTime = audioRef.current.currentTime;
    const duration = audioRef.current.duration;
    setAudioTime({...audioTime, currentTime, duration });
}

  return (
    <div className="music-app">
      <Nav isLibraryOpen={isLibraryOpen} setIsLibraryOpen={setIsLibraryOpen} handleClickOnLibrary={handleClickOnLibrary}/>
      <MusicsLibrary isPlaying={isPlaying} setIsPlaying={setIsPlaying} audioRef={audioRef} selectedMusic={selectedMusic} setSelectedMusic={setSelectedMusic} Musiclist={Musiclist} setMusiclist={setMusiclist} isLibraryOpen={isLibraryOpen} setIsLibraryOpen={setIsLibraryOpen} handleClickOnLibrary={handleClickOnLibrary} />
      <Player isLibraryOpen={isLibraryOpen} isPlaying={isPlaying} setIsPlaying={setIsPlaying} audioRef={audioRef} audioTime={audioTime} setAudioTime={setAudioTime} selectedMusic={selectedMusic} setSelectedMusic={setSelectedMusic} Musiclist={Musiclist} setMusiclist={setMusiclist} />
      <audio isPlaying={isPlaying} setIsPlaying={setIsPlaying} onTimeUpdate={handleTimeReccord} ref={audioRef} src={selectedMusic.audio}></audio>
    </div>
  );
}

export default App;
