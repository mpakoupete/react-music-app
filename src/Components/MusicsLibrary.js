import React, {useState} from 'react';
import Music from './Music';



const MusicsLibrary = ({isPlaying, setIsPlaying, audioRef, selectedMusic, setSelectedMusic, Musiclist, setMusiclist, isLibraryOpen}) => {


    return (
        
        <div className={`musics-main-container ${ isLibraryOpen ? "library-opened" : "" } `} >
            <h4>Library</h4>
            <div className="musics-container">
            { Musiclist.map( (music) =>  <Music isPlaying={isPlaying} setIsPlaying={setIsPlaying} audioRef={audioRef} selectedMusic={selectedMusic} setSelectedMusic={setSelectedMusic} music={music} Musiclist={Musiclist} setMusiclist={setMusiclist}  />  ) }
           </div>
        </div>
    );
}

export default MusicsLibrary;

//               
  