import React from 'react';

const Player = () => {
    return (
        <div className="Player">
            <div className="music-picture">
                <h1>music picture</h1>
                <img src="" alt="music picture"/>
            </div>
            <div className="music-bar-controler">
                <p>Start time</p>
                <input type="range" name="" id=""/>
                <p>End time</p>
            </div>
            <div className="music-controler-btn">
                <div className="back-btn">
                    <p>Back</p>
                </div>
                <div className="play-btn">
                    <p>Play</p>
                </div>
                <div className="forward-btn">
                    <p>Forward</p>
                </div>
            </div>
        </div>
    )
}

export default Player;