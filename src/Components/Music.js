import React from 'react';

/* A single Music Component that we will store in the Library Container
    Each Music is represent by the Cover, the title, Artiste Name and the Audio to Play */

const Music = ( {isPlaying, setIsPlaying, audioRef, selectedMusic, setSelectedMusic, music, Musiclist, setMusiclist}) => {

    /* When User selects a music in the library, this song is played automaticaly */
    const handleSelectSong = async () => {

        audioRef.current.pause()
        setIsPlaying(!isPlaying);
        
        let selectedSongIndex = Musiclist.findIndex( (item) => item === music); // Find Index of What we selected on the Web Browser
        let tempMusicList = [...Musiclist];

        for (let index = 0; index < tempMusicList.length; index++) {
            tempMusicList[index].active = false;                       // active is a Property Song to set the one that is active. We put all to false before setting true to the one tha has been selected
        } 

        tempMusicList[selectedSongIndex].active = true;
        
        await setSelectedMusic(music);
        setMusiclist(tempMusicList);

        audioRef.current.play();  // We Play the Song
        setIsPlaying(true);
 
        console.log(audioRef);
    }
    

    return (
        // here we Want to style differently the Music that has been selected with the className "selected-song"
        <div className={`music ${music.active? "selected-song" : ""} `} onClick={handleSelectSong} >
            <img className="music-image" src={music.cover} alt="music cover picture"/>
        <div className="music-description">
            <h3>{music.name}</h3>
            <h4>{music.artist}</h4>
        </div>
    </div>
    );
}

export default Music;