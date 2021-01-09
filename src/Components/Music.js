import React, {useState} from 'react';

const Music = ( { selectedMusic, setSelectedMusic, music, Musiclist, setMusiclist}) => {

    const handleSelectSong = () => {
        //let selectedSongIndex = Musiclist.findIndex(music => music.id === music.id);
        //let tempMusicList = [...Musiclist];
        //console.log(selectedSongIndex);
        //tempMusicList[selectedSongIndex].active = true 
        //console.log(tempMusicList);
       setSelectedMusic(music);
    }

    return (
        <div className="music" onClick={handleSelectSong} id={music.id}>
        <div className="image-container">
            <img className="music-image" src={music.cover} alt="music cover picture"/>
        </div>
        <div className="music-description">
            <h3>{music.name}</h3>
            <p>{music.artist}</p>
        </div>
    </div>
    );
}

export default Music;