import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic } from '@fortawesome/free-solid-svg-icons'

const Nav = ({isLibraryOpen, handleClickOnLibrary}) => {

    return (
        <nav className={`nav  ${isLibraryOpen? "library-showed-hide-logo move-player" : ""}`}>
            <h1 className="logo">Waves</h1>
            <button onClick={handleClickOnLibrary} className={`library-btn ${isLibraryOpen? "library-showed-up" :"" }`}>
                Library
                <FontAwesomeIcon icon={faMusic} />
            </button>
        </nav>
    )
}

export default Nav;