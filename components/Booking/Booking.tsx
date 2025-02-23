import React from 'react';
import AutocompleteAddress from './AutocompleteAddress'

function Booking() {
    return (
        <div className='p-5 h-[90vh]'>
            <h2 className='mb-20  text-[25px] font-semibold'>Booking</h2>
            <div className='w-full max-w-md'>
                <div className='-mt-10'>
                    <AutocompleteAddress />
                </div>
            </div>
        </div>
    )
}
export default Booking