import React, {useRef, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faStepBackward, faStepForward } from '@fortawesome/free-solid-svg-icons';

const Player = ({isLibraryOpen, isPlaying, setIsPlaying, audioRef, audioTime, setAudioTime, selectedMusic, setSelectedMusic, Musiclist, setMusiclist}) => {

const handleClickPlay = async () => {
        if (!isPlaying) {
            await audioRef.current.play();
            setIsPlaying(!isPlaying);
        } else {
            await audioRef.current.pause();
           setIsPlaying(!isPlaying);
        }
        console.log(audioRef);
    }

    const handleClickNext = async () => {
        let selectedSongIndex = Musiclist.findIndex( (item) => item.active === true)
        console.log(selectedSongIndex);

        let tempMusicList = [...Musiclist];

        for (let index = 0; index < tempMusicList.length; index++) {
            tempMusicList[index].active = false;
        }
        tempMusicList[(selectedSongIndex + 1) % tempMusicList.length].active = true;
        setMusiclist(tempMusicList);
        await setSelectedMusic(Musiclist[(selectedSongIndex + 1) % tempMusicList.length]);
        audioRef.current.play()
        setIsPlaying(true);
    }

    const handleClickPrevious = async () => {
        let selectedSongIndex = Musiclist.findIndex( (item) => item.active === true)
        console.log(selectedSongIndex);

        let tempMusicList = [...Musiclist];

        if (selectedSongIndex <= 0) selectedSongIndex =  tempMusicList.length; 


        for (let index = 0; index < tempMusicList.length; index++) {
            tempMusicList[index].active = false;
        }
        let index = (selectedSongIndex - 1) % tempMusicList.length;
        tempMusicList[index].active = true;
        setMusiclist(tempMusicList);
        await setSelectedMusic(Musiclist[index]);
        audioRef.current.play()
        setIsPlaying(true);
    }

    const handleScrollMusic = (e) => {

            if (isPlaying) {
                audioRef.current.pause();
                setAudioTime({...audioTime, currentTime:Number(e.target.value)});
                audioRef.current.currentTime = Number(e.target.value);
                audioRef.current.play();
             } else {
                setAudioTime({...audioTime, currentTime:Number(e.target.value)});
                audioRef.current.currentTime = Number(e.target.value);
            }
        
        console.log(Number(e.target.value));
        console.log(selectedMusic);
        console.log(audioRef);
    }

    const getTimeFormat = (time) => {
        var timestamp = time;
        var hours = Math.floor(timestamp / 60 / 60);
        var minutes = Math.floor(timestamp / 60) - (hours * 60);
        var seconds = Math.floor(timestamp % 60);
        var formatted = minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0');
        return formatted;
    }

    return ( 
        <div className={`Player  ${isLibraryOpen? "move-player" : ""}`}>
            <img className={`${isPlaying? "rotate-picture" : ""}`} src={selectedMusic.cover} alt="music picture"/>
            <div className="music-bar-controler">
                <p>{getTimeFormat(audioTime.currentTime) || 0}</p>
                <input  max={audioTime.duration || 0} onChange={handleScrollMusic} value={audioTime.currentTime} className="input" type="range" name="" id=""/>
                <p>{audioTime.currentTime ? getTimeFormat(audioTime.duration) : "00:00"}</p>
            </div>
            <div className="music-controler-btn">
                <div className="back-btn">
                <FontAwesomeIcon onClick={handleClickPrevious} icon={faStepBackward} size="2x"/> 
                </div>
                <div className="play-btn">
                <FontAwesomeIcon onClick={handleClickPlay} icon={isPlaying? faPause : faPlay} size="2x"/>
                </div>
                <div className="forward-btn">
                <FontAwesomeIcon onClick={handleClickNext} icon={faStepForward} size="2x"/>
                </div>
            </div>
        </div>
    )
}

export default Player;