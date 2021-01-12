import React from 'react';
import Music from './Music';
 

/* Library Container that Contain Musics Available to play*/

const MusicsLibrary = ({isPlaying, setIsPlaying, audioRef, selectedMusic, setSelectedMusic, Musiclist, setMusiclist, isLibraryOpen}) => {
 
   return (
        // Here we want to Add a special CSS property weither We Want to see the Library Content or not
        <div className={`musics-main-container ${ isLibraryOpen ? "library-opened" : "" } `} >
            <h2>Library</h2> 
            <div className="musics-container">
            { Musiclist.map( (music) =>  <Music isPlaying={isPlaying} setIsPlaying={setIsPlaying} audioRef={audioRef} selectedMusic={selectedMusic} setSelectedMusic={setSelectedMusic} music={music} Musiclist={Musiclist} setMusiclist={setMusiclist}  />  ) }
           </div>
        </div>
    );
}

export default MusicsLibrary;

//               
  