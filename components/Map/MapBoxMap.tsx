"use client"
import React, { useContext, useEffect, useRef, useState } from 'react'
import {Map } from 'react-map-gl/mapbox'
import 'mapbox-gl/dist/mapbox-gl.css';
import { UserLocationContext } from '@/context/UserLocationContext';
import Markers from './Markers';
import { DestinationCordiContext } from '@/context/DestinationCordiContext';
import { SourceCordiContext } from '@/context/SourceCordiContext';

function MapBoxMap() {

  const mapRef = useRef<any>(null);

  const {userLocation, setUserLocation} = useContext(UserLocationContext);
  const {sourceCoordinates, setSourceCoordinates} = useContext(SourceCordiContext);
  const {destinationCoordinates, setDestinationCoordinates} = useContext(DestinationCordiContext);
//use to fly to the source coordinates
  useEffect(()=>{
    if(sourceCoordinates){
        mapRef.current?.flyTo({
        center:[sourceCoordinates.lng, sourceCoordinates.lat],
        duration:2500
      })
    }
  },[sourceCoordinates])
//use to fly to the destination coordinates
  useEffect(()=>{
    if(destinationCoordinates){
      mapRef.current?.flyTo({
        center:[destinationCoordinates.lng, destinationCoordinates.lat],
        duration:2500
      })
    }
  },[destinationCoordinates])
  
  return (
    <div className='p-5'>
        <h2 className='text-[20px] font-semibold'>Map</h2>
        <div className='rounded-lg overflow-hidden'>
          {userLocation?<Map
            ref={mapRef}
            mapboxAccessToken={process.env.NEXT_PUBLIC_MAP_ACCESS_TOKEN}
            initialViewState={{
            longitude: userLocation?.lng,
            latitude: userLocation?.lat, 
            zoom: 14
        }}
        style={{width: '100%' , height: 700, borderRadius:10}}
        mapStyle="mapbox://styles/mapbox/streets-v9">
        <Markers/>
      </Map>:null}
      </div>
    </div>
  )
}

export default MapBoxMap

