import { DirectionDataContext } from '@/context/DirectionDataContext'
import React, { useContext } from 'react'

function DistanceTime() {

    const {directionData, setDirectionData} =useContext(DirectionDataContext);

  return directionData?.routes&&(
    <div>
        <h2 className=' font-bold  text-red-700 opacity-80 text-[15px]'>
            Distance : <span className='font-bold text-black '>
                {(directionData?.routes[0]?.distance*0.001).toFixed   (2)}Kilometer </span>
            Distance : <span className='font-bold text-black '>
                {(directionData?.routes[0]?.duration/60).toFixed(2)}min</span> 
        </h2>
    </div>
  )
}

export default DistanceTime