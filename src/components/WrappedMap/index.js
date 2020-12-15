// Core
import React from 'react';
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from 'react-google-maps';

const Map = ({positionOfISS}) => {
    const defaultPosition = {
        lat: +positionOfISS.latitude,
        lng: +positionOfISS.longitude
    }
    return (
        <GoogleMap
            defaultZoom={20}
            defaultCenter={defaultPosition}
        >
            <Marker position={defaultPosition}/>
        </GoogleMap>
    )
}

const WrappedMap = withScriptjs(withGoogleMap(Map))

export default WrappedMap;