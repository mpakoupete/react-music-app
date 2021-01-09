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

    const handleClickNext = () => {

    }

    const handleClickPrevious = () => {

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
        <div className="Player">
            <div className={`picture  ${isLibraryOpen? "move-player" : ""}`}>
            <img className="music-picture" src={selectedMusic.cover} alt="music picture"/>
            </div>
            <div className={`music-bar-controler  ${isLibraryOpen? "move-player" : ""}`}>
                <p>{getTimeFormat(audioTime.currentTime)}</p>
                <input  max={audioTime.duration} onC value={audioTime.currentTime} className="input" type="range" name="" id=""/>
                <p>{getTimeFormat(audioTime.duration)}</p>
            </div>
            <div className={`music-controler-btn  ${isLibraryOpen? "move-player" : ""}`}>
                <div className="back-btn">
                <FontAwesomeIcon icon={faStepBackward} size="2x"/> 
                </div>
                <div className="play-btn">
                <FontAwesomeIcon onClick={handleClickPlay} icon={isPlaying? faPause : faPlay} size="2x"/>
                </div>
                <div className="forward-btn">
                <FontAwesomeIcon icon={faStepForward} size="2x"/>
                </div>
            </div>
        </div>
    )
}

export default Player;