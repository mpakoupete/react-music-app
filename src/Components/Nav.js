import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic } from '@fortawesome/free-solid-svg-icons'

const Nav = ({isLibraryOpen, handleClickOnLibrary}) => {

    return (
        <div className="nav">
        <div className="header">
            <div className="logo">
                <h1>Waves</h1>
            </div>
            <div onClick={handleClickOnLibrary} className={`library-btn ${isLibraryOpen? "change-color" :"" }`}>
                <h2>Library</h2> <FontAwesomeIcon icon={faMusic} size="2x" />
            </div>
        </div>
        </div>
    )
}

export default Nav;