import React, {useRef, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause, faStepBackward, faStepForward } from '@fortawesome/free-solid-svg-icons'
import Musicdata from '../Data/Musicdata';

const Player = ({selectedMusic, setSelectedMusic, Musiclist, setMusiclist}) => {

    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [audioTime, setAudioTime] = useState({currentTime: null, duration : null});

    const handleClickPlay = () => {
        if (!isPlaying) {
            audioRef.current.play();
            setIsPlaying(!isPlaying);
        } else {
            audioRef.current.pause();
            setIsPlaying(!isPlaying);
        }
        console.log(audioRef);
    }

    const handleTimeReccord = () => {
        const currentTime = audioRef.current.currentTime;
        const duration = audioRef.current.duration;
        setAudioTime({...audioTime, currentTime, duration });
    }

    let selectedSongIndex = Musiclist.findIndex(music => music.id === music.id);

    return (
        <div className="Player">
            <div className="picture">
            <img className="music-picture" src={selectedMusic.cover} alt="music picture"/>
            </div>
            <div className="music-bar-controler">
                <p>Start time</p>
                <input  max={audioTime.duration}  value={audioTime.currentTime} className="input" type="range" name="" id=""/>
                <p>End time</p>
            </div>
            <div className="music-controler-btn">
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
            <audio onTimeUpdate={handleTimeReccord} ref={audioRef} src={selectedMusic.audio}></audio>
        </div>
    )
}

export default Player;