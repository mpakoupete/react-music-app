import React, {useState} from 'react';
import Music from './Music';



const MusicsLibrary = ({selectedMusic, setSelectedMusic, Musiclist, setMusiclist, isLibraryOpen}) => {


    return (
        
        <div className={`musics-main-container ${ isLibraryOpen ? "library-opened" : "" } `} >
            <h4>Library</h4>
            <div className="musics-container">
            { Musiclist.map( (music) =>  <Music selectedMusic={selectedMusic} setSelectedMusic={setSelectedMusic} music={music} Musiclist={Musiclist}  />  ) }
           </div>
        </div>
    );
}

export default MusicsLibrary;

//               
  