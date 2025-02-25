"use client"
import { DestinationCordiContext } from '@/context/DestinationCordiContext'
import { SourceCordiContext } from '@/context/SourceCordiContext'
import React, { useContext, useEffect, useState } from 'react'

function AutocompleteAddress() {

    const session_token = '5ccc4a4-ab0a-4a7c-943d-580e55542363'
    const MAPBOX_RETRIVE_URL = 'https://api.mapbox.com/search/searchbox/v1/retrieve/'

    const [source, setSource] = useState<any>('')
    const [sourceChange, setSourceChange] = useState<any>(false)
    const [destinationChange, setDestinationChange] = useState<any>(false)

    const {sourceCoordinates, setSourceCoordinates} = useContext(SourceCordiContext);
    const {destinationCoordinates, setDestinationCoordinates} = useContext(DestinationCordiContext);

    const [addressList, setAddressList] = useState<any>([])
    const [destination, setDestination] = useState<any>('')
    const [destinationList, setDestinationList] = useState<any>([])
 

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            getAddressList(source, setAddressList)
        }, 1000)
        return () => clearTimeout(delayDebounceFn)
    }, [source])

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            getAddressList(destination, setDestinationList)
        }, 1000)
        return () => clearTimeout(delayDebounceFn)
    }, [destination])

    const getAddressList = async (query: string, setList: React.Dispatch<React.SetStateAction<any[]>>) => {
        if (query.trim() === '') {
            setList([]); // Clear suggestions if input is empty
            return; // Exit the function if no input
        }
        const res = await fetch('/api/search-address?q=' + query, {
            headers: {
                "Content-Type": "application/json",
            }
        })
        const result = await res.json()
        setList(result)
    }

    const onSourceAddressClick = async (item:any) =>{
        setSource(item.full_address); 
        setAddressList([]); setSourceChange(false)
        const res=await fetch( MAPBOX_RETRIVE_URL+item.mapbox_id+"?session_token="+session_token+"&access_token="+process.env.NEXT_PUBLIC_MAP_ACCESS_TOKEN
        )
        const result = await res.json()
        setSourceCoordinates({
            lat: result.features[0].geometry.coordinates[1],
            lng: result.features[0].geometry.coordinates[0]
        })
        console.log(result)
    }
    const onDestinationAddressClick = async (item:any) =>{
        setDestination(item.full_address); 
        setDestinationList([]); setDestinationChange(false)
        const res=await fetch( MAPBOX_RETRIVE_URL+item.mapbox_id+"?session_token="+session_token+"&access_token="+process.env.NEXT_PUBLIC_MAP_ACCESS_TOKEN
        )
        const result = await res.json()
        setDestinationCoordinates({
            lat: result.features[0].geometry.coordinates[1],
            lng: result.features[0].geometry.coordinates[0]
        })
        console.log(result)
    }

    return (
        <div className='mt-5 border-cyan-500'>
            <div className='relative' >
                <label className='text-black-300 text-[20px]'>From</label>
                <input type="text"
                    className='hover:bg-gray-200 bg-white p-1 border-[px] w-full rounded-md outline-none
                    focus:outline-gray-500'
                    value={source}
                    onChange={(e) => setSource(e.target.value)}
                />
                {addressList?.suggestions ? (
                    <div className='shadow-md p-2 absolute rounded-md bg-white mt-2'>
                        {addressList.suggestions.map((item: any, index: number) => (
                            <h2 key={`${source}-${item.id || index}`} className='hover:bg-blue-200 cursor-pointer'
                                onClick={() => { onSourceAddressClick(item) }}
                            >{item.full_address}</h2>
                        ))}
                    </div>
                ):null}
            </div>
            <div className='relative mb-20'>
                <label className='text-black-300 text-[20px]'>To</label>
                <input type="text"
                    className='hover:bg-gray-200 bg-white p-1 border-[px] w-full rounded-md outline-none focus:outline-gray-500'
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                />
                {destinationList?.suggestions ? (
                    <div className='shadow-md p-2 absolute rounded-md bg-white mt-2'>
                        {destinationList.suggestions.map((item: any, index: number) => (
                            <h2 key={`${destination}-${item.id || index}`} className='hover:bg-blue-200 cursor-pointer'
                                onClick={() => { onDestinationAddressClick(item) }}
                            >{item.full_address}</h2>
                        ))}
                    </div>
                ):null}
            </div>
        </div>
    )
}

export default AutocompleteAddress

