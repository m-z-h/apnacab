"use client"

import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Booking from "../components/Booking/Booking";
import MapBoxMap from "@/components/Map/MapBoxMap";
import { useEffect, useState } from "react";
import { UserLocationContext } from "@/context/UserLocationContext";


export default function Home() {
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
    <div className="">
      <UserLocationContext.Provider value={{userLocation, setUserLocation}}>
        <div className='grid grid-cols-1 md:grid-cols-3'>
          <div className="bg-green-50 ">
            <Booking />
          </div>
          <div className='col-span-2 bg-blue-300'>
            <MapBoxMap/>
          </div>
        </div>
      </UserLocationContext.Provider>
    </div>
  );
}