"use client"

import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Booking from "../components/Booking/Booking";
import MapBoxMap from "@/components/Map/MapBoxMap";
import { useEffect, useState } from "react";
import { UserLocationContext } from "@/context/UserLocationContext";
import { SourceCordiContext } from "@/context/SourceCordiContext";
import { DestinationCordiContext } from "@/context/DestinationCordiContext";
import { DirectionDataContext } from "@/context/DirectionDataContext";


export default function Home() {
  const [directionData, setDirectionData] = useState<any>([]);
  const [sourceCoordinates, setSourceCoordinates] = useState<any>([]);
  const [destinationCoordinates, setDestinationCoordinates] = useState<any>([]);
  const [userLocation, setUserLocation] = useState<any>();

    useEffect(() => {
      getuserLocation();
    }, []);  

    const getuserLocation = () => {
      navigator.geolocation.getCurrentPosition((pos) => {
        setUserLocation({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
      });
  });
  }

  return (
    <div>
      <UserLocationContext.Provider value={{userLocation, setUserLocation}}>
      <SourceCordiContext.Provider value={{sourceCoordinates, setSourceCoordinates}}>
      <DestinationCordiContext.Provider value={{destinationCoordinates, setDestinationCoordinates}}>
      <DirectionDataContext.Provider value={{directionData, setDirectionData}}>
        <div className='grid grid-cols-1 md:grid-cols-3'>
          <div className="bg-green-50 ">
            <Booking />
          </div>
          <div className='col-span-2 bg-blue-300'>
            <MapBoxMap/>
          </div>
        </div>
        </DirectionDataContext.Provider>
        </DestinationCordiContext.Provider>
      </SourceCordiContext.Provider>
      </UserLocationContext.Provider>
    </div>
  );
}