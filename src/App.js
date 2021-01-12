import React, {useState, useRef} from 'react';
import Nav from './Components/Nav';
import Player from './Components/Player';
import MusicsLibrary from './Components/MusicsLibrary';
import './Styles/main.scss';
import Musicdata from './Data/Musicdata';

function App() {

  /* States */
  const [isPlaying, setIsPlaying] = useState(false); //used in Player to change Play/Pause Button
  const [isLibraryOpen, setIsLibraryOpen] = useState(false); //used to style and create CSS annimation  
  const [Musiclist, setMusiclist] = useState(Musicdata()); // imported list of Music coming from ./Data / Can be improved by using API to request data and save it in this State
  const [selectedMusic, setSelectedMusic] = useState(Musiclist[0]); // Used to update the music selected by User, either by choosing in Library or by clicking on Next
  const [audioTime, setAudioTime] = useState({currentTime: null, duration : null}); // used to show on Screen the minutation

  const audioRef = useRef(null);        // A React refecence to Audio


  /* Function to Store the state of Library : Opened or not ? */
  const handleClickOnLibrary = () => {
      setIsLibraryOpen(!isLibraryOpen);
  }

  /* Function to get the current minutation of the Audio playing and store it in State AudioTime */
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
