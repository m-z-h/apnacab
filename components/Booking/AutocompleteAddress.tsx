"use client"
import React, { useEffect, useState } from 'react'

function AutocompleteAddress() {
    const [source, setSource] = useState<any>('')
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

    return (
        <div className='mt-5'>
            <div className='relative'>
                <label className='text-black-300 text-[20px]'>From</label>
                <input type="text"
                    className='hover:bg-gray-200 bg-white p-1 border-[px] w-full rounded-md outline-none
                    focus:outline-yellow-500'
                    value={source}
                    onChange={(e) => setSource(e.target.value)}
                />
                {addressList?.suggestions ? (
                    <div className='shadow-md p-2 absolute rounded-md bg-white mt-2'>
                        {addressList.suggestions.map((item: any, index: number) => (
                            <h2 key={`${source}-${item.id || index}`} className='hover:bg-blue-200 cursor-pointer'
                                onClick={() => { setSource(item.full_address); setAddressList([]) }}
                            >{item.full_address}</h2>
                        ))}
                    </div>
                ) : null}
            </div>
            <div className='relative mb-20'>
                <label className='text-black-300 text-[20px]'>To</label>
                <input type="text"
                    className='hover:bg-gray-200 bg-white p-1 border-[px] w-full rounded-md outline-none focus:outline-yellow-500'
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                />
                {destinationList?.suggestions ? (
                    <div className='shadow-md p-2 absolute rounded-md bg-white mt-2'>
                        {destinationList.suggestions.map((item: any, index: number) => (
                            <h2 key={`${destination}-${item.id || index}`} className='hover:bg-blue-200 cursor-pointer'
                                onClick={() => { setDestination(item.full_address); setDestinationList([]) }}
                            >{item.full_address}</h2>
                        ))}
                    </div>
                ) : null}
            </div>
        </div>
    )
}

export default AutocompleteAddress