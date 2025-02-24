import React from 'react';
import AutocompleteAddress from './AutocompleteAddress'
import Cars from './Cars'
import Cards from './Cards';

function Booking() {
    return (
        <div className=' p-5 h-[90vh]'>
            <h2 className='mb-20  text-[25px] font-semibold'>Booking</h2>
            <div className='w-full max-w-md'>
                <div className='border-[2px] border-red-600 -mt-10'>
                    <AutocompleteAddress />
                    <Cars/>
                    <Cards/>
                    <button className='w-full
                    bg-yellow-400 p-1 rounded-md mt-4'>Book</button>
                    
                </div>
            </div>
        </div>
    )
}
export default Booking