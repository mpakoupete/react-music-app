import React, {useState, useRef} from 'react';

const Music = ( {isPlaying, setIsPlaying, audioRef, selectedMusic, setSelectedMusic, music, Musiclist, setMusiclist}) => {

    const handleSelectSong = async () => {

        audioRef.current.pause()
        setIsPlaying(!isPlaying);
        
        let selectedSongIndex = Musiclist.findIndex( (item) => item === music);
        let tempMusicList = [...Musiclist];

        for (let index = 0; index < tempMusicList.length; index++) {
            tempMusicList[index].active = false;
        } 

        tempMusicList[selectedSongIndex].active = true;
        setSelectedMusic(music);
        setMusiclist(tempMusicList);

        
        await audioRef.current.play();
        setIsPlaying(true);

        console.log(audioRef);
    }

    return (
        <div className={`music ${music.active? "selected-song" : ""} `} onClick={handleSelectSong} >
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