// Core
import React from 'react';
import {
    shape,
    string,
} from 'prop-types';

// Styles
import './Header.scss';

const comp = 'Header';

const Header = ({coordinates, currentTime}) => {
    return (
        <div className={comp}>
            <div className={`${comp}__coordinates`}>
                <p>
                    ISS is now located at:
                    <span>latitude: {coordinates.latitude}</span>
                    <span>longitude: {coordinates.longitude}</span>
                </p>
            </div>
            <div className={`${comp}__time`}>
                <p>
                    Current UTC time:
                    <span>{currentTime.time}</span>
                    <span>{currentTime.date}</span>
                </p>
            </div>
        </div>
    )
}

Header.propTypes = {
    coordinates: shape({
        latitude: string.isRequired,
        longitude: string.isRequired,
    }).isRequired,
    currentTime: shape({
        time: string.isRequired,
        date: string.isRequired,
    }).isRequired,
}

export default Header;