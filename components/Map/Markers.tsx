import React, { useContext } from 'react'
import {Map, Marker} from 'react-map-gl/mapbox'
import 'mapbox-gl/dist/mapbox-gl.css';
import { UserLocationContext } from '@/context/UserLocationContext';
import { SourceCordiContext } from '@/context/SourceCordiContext';
import { DestinationCordiContext } from '@/context/DestinationCordiContext';

function Markers() {
    const {userLocation, setUserLocation} = useContext(UserLocationContext);
    const {sourceCoordinates, setSourceCoordinates} = useContext(SourceCordiContext);
    const {destinationCoordinates, setDestinationCoordinates} = useContext(DestinationCordiContext);

  return (
    <div>
        {/* user location marker */}
        {/* source marker */}
        {sourceCoordinates.length!=0?<Marker 
            longitude={sourceCoordinates?.lng} 
            latitude={sourceCoordinates?.lat} 
            anchor="bottom" >
            <img src="./pin.png" 
            className='h-15 w-10'
            />
        </Marker>:null}

        {/* destion marker */}
        {destinationCoordinates.length!=0?<Marker 
            longitude={destinationCoordinates?.lng} 
            latitude={destinationCoordinates?.lat} 
            anchor="bottom" >
            <img src="./pin.png" 
            className='h-15 w-10'
            />
        </Marker>:null}
    </div>
  )
}

export default Markers