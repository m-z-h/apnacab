"use client"

import CarsList from '@/data/CarsList'
import React, { useContext, useState } from 'react'
import Image from 'next/image'
import { DirectionDataContext } from '@/context/DirectionDataContext'
import { SelectedCarAmountContext } from '@/context/SelectedCarAmount'

function Cars() {
    const [selectedCar, setSelectedCar] =useState<any>()
    const {directionData, setDirectionData} = useContext(DirectionDataContext);
    const {carAmount, setCarAmount} = useContext(SelectedCarAmountContext)

    const getCost = (charges: any) => {
        return (charges * directionData.routes[0].distance * 0.001).toFixed(2);
    }

    return (
        <div className='mt-3'>
            <h2 className='font-semibold'>Select Cars</h2>
            <div className='grid
            grid-cols-3
            md:grid-cols-2
            lg:grid-cols-3
            gap-2 m-1 p-2 '>
                {CarsList.map((item, index) => item && (
                    <div key={index} className={`m-2 p-2 border-[3px] rounded-md border-emerald-50
                    hover:border-yellow-300 cursor-pointer ${index === selectedCar ? 'border-yellow-300' :null}`}     
                    onClick={() => {setSelectedCar(index);
                    setCarAmount(getCost(item.charges))
                    }}>
                        <Image src={item.image}
                        alt={item.name}
                        width={75}
                        height={75}
                        className='w-full'
                        />
                        <h2 className='text-[16px] text-black-500'>{item.name}</h2>
                        {directionData.routes ? <span className='float-right text-black-500 font-medium'>₹{getCost(item.charges)}</span> : null}
                    </div> 
                ))}
            </div>
        </div>
    )
}

export default Cars